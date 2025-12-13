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
    int getID()
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
        cout<<"Employee ID : " << id <<endl;
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

int main()
{
     DoublyLinkedList l1;

    l1.addList(new Employee(2));
    l1.addList(new Employee(4));
    l1.addList(new Employee(20));

    l1.insertList(new Employee(5), 2);

    l1.displayAll();
    l1.deleteNode(2);
    l1.sortListV1();
    l1.displayAll();
//    l1.sortListV2();
//    l1.displayList();


    return 0;

}



//class doublyLinkedList
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
//    int isEmpty()
//    {
//        return (pEnd == NULL );
//    }
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
//    int linkedListSize()
//    {
//        Employee* pCurrent = pStart ;
//        int counter = 0;
//        while(pCurrent)
//        {
//            counter++;
//            pCurrent = pCurrent->pNext;
//        }
//        return counter;
//    }
//
//    void sortListV1()
//    {
//        if(!pStart)
//            return;
//
//        Employee* pItem = pStart;
//        int listSize = linkedListSize();
//        for(int i = 0 ; i<listSize-1 ; i++)
//        {
//            Employee* pMin = pItem;
//            Employee* pCurrent = pItem->pNext;
//            for(int j = i+1; j < listSize ; j++ )
//            {
//                if( *pMin > *pCurrent) //comparing Emp With Emp using * but with it , it will be pointer with pointer
//                {
//                    pMin = pCurrent;
//                }
//                pCurrent = pCurrent->pNext;
//            }
//            int temp = pItem->getID();
//            pItem->setID( pMin->getID() ) ;
//            pMin->setID(temp);
//            pItem = pItem->pNext;
//        }
//
//    }
//    void sortListV2()
//    {
//        if(!pStart || pStart==pEnd)
//            return;
//        Employee* pCurrent = pStart;
//        while( pCurrent )
//        {
//            Employee* pMin = pCurrent;
//            Employee* pCompare = pCurrent->pNext;
//            while(pCompare)
//            {
//                if(*pMin > *pCompare)
//                {
//                    pMin = pCompare;
//                }
//                pCompare = pCompare->pNext;
//            }
//            int temp = pCurrent->getID();
//            pCurrent->setID( pMin->getID() ) ;
//            pMin->setID(temp);
//            pCurrent = pCurrent->pNext;
//        }
//
//    }
//
//
//    void displayList()
//    {
//        Employee* pCurrent =pStart;
//        int counter = linkedListSize();
//        for(int i = 0 ; i < counter ; i++)
//        {
//            cout<<i<<" - ";
//            pCurrent->display();
//            pCurrent = pCurrent->pNext;
//        }
//        cout<<"That's all Employees ."<<endl;
//    }
//
//
//};


