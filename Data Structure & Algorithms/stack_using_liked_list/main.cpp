#include <iostream>

using namespace std;



class Employee
{
private:
    int id ;

public:
    Employee* pNext ;
    Employee* pPrev;


    Employee()
    {
        id = 0;
        pNext = pPrev = NULL;
    }
    Employee (int _id)
    {
        id  = _id;
        pNext = pPrev = NULL;

    };
    Employee(const Employee& param)
    {
        id = param.getID();
    }
    int getID() const
    {
        return id;
    }
    void setID(int _id)
    {
        id = _id;
    }
    int operator>(Employee& right)
    {
        return( id  > right.id );
    }
    void display()
    {
        cout<<"Emp id : " << id <<endl;
    }
    ~Employee() {};
};


class DoublyLinkedList
{
protected:
    Employee* pStart ;
    Employee* pEnd;


public:
    DoublyLinkedList()
    {
        pStart = pEnd = NULL;
    }
    void addList(Employee* pItem )
    {
        if(!pStart)
        {
            pStart = pEnd = pItem;
        }
        else
        {
            pEnd->pNext = pItem;
            pItem->pPrev = pEnd;
            pEnd = pItem;
        }
    }

    void insertList(Employee *pItem, int position)
    {
        if(!pStart)
        {
            addList(pItem);
            return;
        }
        if(position == 0)
        {
            pItem->pNext = pStart;
            pStart->pPrev = pItem;
            pStart = pItem;
            pItem->pPrev = NULL;
            return;
        }
        Employee* pCurrent = pStart ;
        int CurrentIndex = 0;
        while(pCurrent && CurrentIndex < position )
        {
            CurrentIndex++;
            pCurrent = pCurrent->pNext;
        }
        if(CurrentIndex == position)
        {
            if(pCurrent == NULL) // Check if it's the last node
            {
                pEnd->pNext = pItem;
                pItem->pPrev = pEnd;
                pItem->pNext = NULL;
                pEnd = pItem;
                return;
            }
            else
            {
                pItem->pPrev = pCurrent->pPrev;
                pItem->pNext = pCurrent;
                pCurrent->pPrev = pItem;
                pItem->pPrev->pNext = pItem;
            }
        }
        else
        {
            cout<<"the list is smaller than this index"<<endl;
        }
    }

    Employee* searchList(int Code)
    {
        Employee* pItem = pStart ;
        while(pItem && pItem->getID() != Code)
        {
            pItem = pItem->pNext;
        }
        return pItem;
    }


    void deleteNode(int Code)
    {
        if(!pStart)
        {
            cout<<"The List is All ready Empty"<<endl;
            return;
        }
        Employee* pItem = searchList(Code) ;
        if(pItem)
        {
            if(pStart == pItem)
            {
                pStart = pStart->pNext;
                if(pStart)
                {
                    pStart->pPrev = NULL;
                }
                else
                    pEnd = NULL;

                delete pItem;
            }
            else if(pEnd == pItem)
            {
                pEnd=pEnd->pPrev;
                pEnd->pNext = NULL;
                delete pItem;
            }
            else
            {
                pItem->pNext->pPrev = pItem->pPrev;
                pItem->pPrev->pNext = pItem->pNext;
                delete pItem;
            }
        }
        else
        {
            cout<<"Item Not Found !" <<endl;
        }
    }

    void freeList()
    {
        while(pStart)
        {
            Employee* pCurrent = pStart;
            pStart = pStart->pNext;
            delete pCurrent;
        }
    }

    void displayAll()
    {
        Employee* pCurrent = pStart;
        int i = 0;
        while(pCurrent)
        {
            i++;
            cout<< i <<"- Employee ID is : "<<pCurrent->getID()<<endl;
            pCurrent = pCurrent->pNext;
        }
        cout<<"That's all Employees ."<<endl;
    }


    int listSize()
    {
        Employee* pCurrent = pStart;
        int counter = 0;
        while(pCurrent)
        {
            pCurrent = pCurrent->pNext;
            counter++;
        }
        return counter;
    }
    void sortListV1()
    {
        if( !pStart || pStart == pEnd)
            return;
        Employee* pCurrent = pStart;
        int Lsize = listSize() ;
        for(int i = 0 ; i < Lsize-1 ; i++ )
        {
            Employee* pMin = pCurrent;
            Employee* pCompare = pCurrent->pNext;
            for(int j = i+1 ; j < Lsize ; j++)
            {
                if(*pMin > *pCompare)
                {
                    pMin = pCompare;
                }
                pCompare = pCompare->pNext;
            }
            int temp = pCurrent->getID();
            pCurrent->setID( pMin->getID() ) ;
            pMin->setID(temp);
            pCurrent = pCurrent->pNext;
        }

    }


    ~DoublyLinkedList()
    {
        freeList();
    }
};



class DynamicStack:public DoublyLinkedList
{
private:
    Employee* top;
public:
    DynamicStack()
    {
        top = NULL;
    }
    void push(Employee* pItem)
    {
        DoublyLinkedList::addList(pItem);
    }

    Employee pop()
    {
        if( ! pEnd ) // if there is no Employees
        {
            cout<<"there is no Employees"<<endl;
            return Employee();
        }
        Employee pItem = *pEnd;
        if( pStart == pEnd ) // if there is only one Employee
        {
            delete pEnd;
            pStart = pEnd = NULL;
        }
        else
        {
            Employee* pLast  = pEnd;
            pEnd = pEnd->pPrev;
            pEnd->pNext = NULL;
            delete pLast;
        }
        return pItem;

    }
    void display()
    {
        DoublyLinkedList::displayAll();
    }



};


int main()
{
    Employee e1(4) , e2(3) , e3(1) , e4(2);
    DynamicStack s1;
    s1.push(&e1);
    s1.push(&e2);
    s1.push(&e3);
    s1.push(&e4);
    s1.display();
//    s1.pop();
//    s1.pop();
    s1.sortListV1();
    s1.display();
    return 0;

}

//
//class LinkedList
//{
//protected:
//    Employee* pStart;
//    Employee* pEnd;
//public:
//    LinkedList()
//    {
//        pStart = pEnd = NULL;
//    }
//
//
//    void addList(Employee* pItem)
//    {
//        if( isEmpty() )
//        {
//            pStart = pEnd  = pItem;
//        }
//        else //insert at the end if list is not empty
//        {
//            pEnd->pNext = pItem;
//            pItem->pPrev = pEnd;
//            pEnd = pItem;
//        }
//    }
//
//    int insertList(Employee* pItem, int pos)
//    {
//        int counter = 0 ;
//        Employee* pCurrent = pStart;
//        if( isEmpty() )
//        {
//            cout<<"the list is Empty"<<endl;
//            return -1;
//        }
//        else
//        {
//            if(pos == 0)
//            {
//                pItem->pNext = pStart;
//                pItem->pPrev = NULL;
//                pStart->pPrev = pItem;
//                pStart = pItem;
//                return 1;
//            }
//            //getting the node in the required Index
//            while( pCurrent && counter < pos)
//            {
//                pCurrent= pCurrent->pNext;
//                counter++;
//            }
//            if(pCurrent == NULL && counter == pos)
//            {
//                pEnd->pNext = pItem;
//                pItem->pPrev = pEnd;
//                pItem->pNext = NULL;
//                pEnd = pItem;
//                return 1;
//            }
//            // Inserting at the required Pos
//            //Checking if iam at the req Pos
//            else if(counter == pos)
//            {
//                pItem->pNext = pCurrent;
//                pItem->pPrev = pCurrent->pPrev;
//                pCurrent->pPrev->pNext = pItem;
//                pCurrent->pPrev = pItem;
//
//                return 1;
//            }
//            //the list is smaller than that pos so insert at the end
//            else
//            {
//                cout<<"the list is smaller than this index"<<endl;
//                return -1;
//            }
//        }
//
//
//    }
//
//
//    int countNodes(Employee* pItem)
//    {
//        int counter = 0;
//        while(pItem)
//        {
//            counter++;
//            pItem = pItem->pNext;
//        }
//        return counter;
//    }
//
//
//    int isEmpty()
//    {
//        return (pEnd == NULL );
//    }
//
//
//    Employee* searchEmp(int key)
//    {
//        Employee* pItem = pStart;
//        while(pItem && pItem->getID() != key )
//        {
//            pItem = pItem->pNext;
//        }
//        return pItem;
//    }
//
//    void FreeLinkedList()
//    {
//        Employee* pItem ;
//        while( pStart )
//        {
//            pItem = pStart;
//            pStart = pStart->pNext;
//            delete pItem;
//        }
//        pEnd = NULL;
//    }
//
//    void deleteNode(int Key)
//    {
//        Employee* pTarget = searchEmp(Key) ;
//        if( pTarget )
//        {
//            if(pTarget == pStart) // DELETE FROM THE START
//            {
//                pStart = pStart->pNext;
//                if( pStart )
//                {
//                    pStart->pPrev = NULL;
//                }
//                else
//                {
//                    pEnd = NULL;
//                }
//                delete pTarget;
//            }
//            else if(pTarget == pEnd) //DELETE FROM THE END
//            {
//                pEnd = pEnd->pPrev;
//                delete pTarget;
//                pEnd->pNext = NULL;
//            }
//            else // DELETE FROM MID
//            {
//                pTarget->pPrev->pNext = pTarget->pNext;
//                pTarget->pNext->pPrev = pTarget->pPrev;
//                delete pTarget;
//            }
//        }
//        else
//        {
//            cout<<"the item is not in  the List"<<endl;
//        }
//
//    }
//    void display()
//    {
//        Employee* pCurrent =pStart;
//        while( pCurrent )
//        {
//            pCurrent->display();
//            pCurrent = pCurrent->pNext;
//        }
//    }
//
//    void sortList()
//    {
//        Employee* pItem = pStart;
//        int listSize = countNodes(pStart);
//        for(int i = 0 ; i < listSize-1 ; i++)
//        {
//            int counter = i ;
//            while(counter >= 0)
//            {
//                pItem= pItem->pNext;
//                counter--;
//            }
//            Employee* min = pItem;
//            for(int j = i+1 ; j < listSize ; j++)
//            {
//                if( *min > *pItem )
//                {
//                    min = pItem;
//                }
//                pItem = pItem->pNext;
//            }
//            int temp = min->getID();
//            min->setID(pItem->getID());
//            pItem->setID(temp);
//            pItem = pStart;
//        }
//
//    }
//
//
//
//};

