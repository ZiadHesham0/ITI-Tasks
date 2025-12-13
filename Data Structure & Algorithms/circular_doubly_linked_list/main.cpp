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


class CircularLinkedList
{
protected:
    Employee* pStart;
    Employee* pEnd;
public:
    CircularLinkedList()
    {
        pStart = pEnd = NULL;
    }

    int getSize()
    {
        if(!pStart)
            return 0;
        Employee* pCurrent = pStart->pNext ;
        int counter = 1;
        while(pCurrent->pNext != pStart)
        {
            counter++;
            pCurrent = pCurrent->pNext;
        }
        return counter;
    }

    void append(int id)
    {
        Employee* pItem  = new Employee(id);
        if( ! pStart )
        {
            pStart = pEnd = pItem;
            pStart->pNext = pStart->pPrev = pEnd;
            pEnd->pNext = pEnd->pPrev = pStart;

        }
        else
        {
            pEnd->pNext = pItem;
            pItem->pPrev = pEnd;
            pEnd = pItem;
            pEnd->pNext = pStart;
            pStart->pPrev = pEnd;
        }
    }

    void insertAtPosition(int id, int pos)
    {
        if(!pStart)
        {
            append(id);
            return;
        }
        int index = 0;
        Employee* pItem = new Employee(id);
        Employee* pCurrent = pStart ;
        while(pCurrent->pNext != pStart && index < pos)
        {
            index++;
            pCurrent= pCurrent->pNext;
        }
        if(pos == index)
        {
            pItem->pNext = pCurrent;
            pItem->pPrev = pCurrent->pPrev;
            pCurrent->pPrev = pItem;
            pItem->pPrev->pNext = pItem;
            if(pos == 0)
                pStart = pItem;
        }
        else if(pCurrent->pNext==pStart && pos==index+1)
        {
            append(id);
        }
        else
        {
            cout<<"out of bounds !"<<endl;
        }
    }

    void insertList(int id, int pos)
    {
        int index = 0;
        Employee* pItem = new Employee(id);
        Employee* pCurrent = pStart;
        if(pos == 0) // NOT IMPORTANT
        {
            if(!pStart)
            {
                append(id); // ALWAYS INSERT EVEN THE LIST IS EMPTY AND ITS NOT REQUIRED
            }
            else
            {
                pStart->pPrev = pItem;
                pEnd->pNext = pItem;
                pItem->pNext = pStart;
                pItem->pPrev = pEnd;
                pStart = pItem;
            }
            return;
        }
        while( pCurrent->pNext != pStart && index < pos )
        {
            pCurrent = pCurrent->pNext;
            index++;
        }
        if(pos == index )
        {
            pItem->pPrev = pCurrent->pPrev;
            pItem->pNext = pCurrent;

            pItem->pPrev->pNext = pItem;
            pCurrent->pPrev = pItem;
            return;
        }
        else if(pCurrent->pNext == pStart && index == pos+1 )
        {
            append(id);
            return;
        }
        else
        {
            cout<<"the list is smaller than this index !"<<endl;
        }
        return;

    }

    Employee* search(int key)
    {
        Employee* pItem = pStart;

        do
        {
            if(pItem->getID() == key )
                return pItem;
            pItem = pItem->pNext;

        }
        while( pItem->pNext !=pStart );
        return pItem;
    }
//    void deleteNode(int key)
//    {
//        if(!pStart)
//            return;
//        Employee* pItem = search(key);
//        if(!pItem)
//            return;
//
//        if( pStart == pEnd)
//        {
//            delete pItem;
//            pStart = pEnd = NULL;
//            return;
//        }
//        if(pItem == pStart)
//        {
//            pStart = pStart->pNext;
//            pStart->pPrev = pEnd;
//            pEnd->pNext = pStart;
//        }
//        else if(pItem == pEnd)
//        {
//            pEnd = pEnd->pPrev;
//            pEnd->pNext = pStart;
//            pStart->pPrev = pEnd;
//        }
//        else
//        {
//            pItem->pNext->pPrev = pItem->pPrev;
//            pItem->pPrev->pNext = pItem->pNext;
//        }
//        delete pItem;
//        return;
//    }
//
    void deleteNode(int key)
    {
        if(!pStart)
        {
            cout<<"The list is Empty"<<endl;
            return;
        }

        Employee* pItem = search(key);
        if(!pItem)
        {
            cout<<"The Item not Found"<<endl;
            return;
        }

        if( pStart == pEnd)
        {
            pStart = pEnd = NULL;
        }
        else
        {
            pItem->pNext->pPrev = pItem->pPrev;
            pItem->pPrev->pNext = pItem->pNext;
            if(pItem == pStart)
            {
                pStart = pItem->pNext;
            }
            else if(pItem == pEnd)
            {
                pEnd = pItem->pPrev;
            }
        }
        delete pItem;
        cout<<"Node Deleted Successfully"<<endl;
    }

    void freeCirList()
    {
        if(!pStart)
            return;

        pEnd->pNext = NULL; // to prevent the infinite loop because at the end pItem->pNext will be the pStart
        pStart->pPrev = NULL;
        while( pStart )
        {
            Employee* pItem = pStart;
            pStart = pStart->pNext;
            delete pItem;
        }
        pStart = pEnd = NULL;
    }


    void displayAll()
    {
        if(!pStart)
        {
            cout<<"The list is Empty"<<endl;
            return;
        }

        Employee* pItem = pStart ;
        do
        {
            pItem->display() ;
            pItem = pItem->pNext;
        }
        while(pItem != pStart);
    }
};

int main()
{
    CircularLinkedList c;
    c.append(2);
    c.displayAll();
    c.freeCirList();
    c.displayAll();
    c.insertAtPosition(5, 0);
    c.displayAll();
    c.deleteNode(5);
    c.displayAll();

    return 0;
}
