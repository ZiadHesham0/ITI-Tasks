#include <iostream>

using namespace std;




class Employee
{
private:
    int id ;

public:
    Employee* pLeft ;
    Employee* pRight;
    Employee* pNext;
    Employee* pPrev;
    Employee()
    {
        id = 0;
        pLeft = pRight =pNext = pPrev = NULL;
    }
    Employee (int _id)
    {
        id  = _id;
        pLeft = pRight = NULL;

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



class LinkedList
{
protected:
    Employee* pStart;
    Employee* pEnd;
public:
    LinkedList()
    {
        pStart = pEnd = NULL;
    }

    Employee* getfirstNode()
    {
        return pStart;
    }
    void addList(Employee* pItem)
    {
        if( isEmpty() )
        {
            pStart = pEnd  = pItem;
        }
        else //insert at the end if list is not empty
        {
            pEnd->pNext = pItem;
            pItem->pPrev = pEnd;
            pEnd = pItem;
        }
    }

    int insertList(Employee* pItem, int pos)
    {
        int counter = 0 ;
        Employee* pCurrent = pStart;
        if( isEmpty() )
        {
            cout<<"the list is Empty"<<endl;
            return -1;
        }
        else
        {
            if(pos == 0)
            {
                pItem->pNext = pStart;
                pItem->pPrev = NULL;
                pStart->pPrev = pItem;
                pStart = pItem;
                return 1;
            }
            //getting the node in the required Index
            while( pCurrent && counter < pos)
            {
                pCurrent= pCurrent->pNext;
                counter++;
            }
            if(pCurrent == NULL && counter == pos)
            {
                pEnd->pNext = pItem;
                pItem->pPrev = pEnd;
                pItem->pNext = NULL;
                pEnd = pItem;
                return 1;
            }
            // Inserting at the required Pos
            //Checking if iam at the req Pos
            else if(counter == pos)
            {
                pItem->pNext = pCurrent;
                pItem->pPrev = pCurrent->pPrev;
                pCurrent->pPrev->pNext = pItem;
                pCurrent->pPrev = pItem;

                return 1;
            }
            //the list is smaller than that pos so insert at the end
            else
            {
                cout<<"the list is smaller than this index"<<endl;
                return -1;
            }
        }


    }

    int isEmpty()
    {
        return (pEnd == NULL );
    }

    Employee* searchEmp(int key)
    {
        Employee* pItem = pStart;
        while(pItem && pItem->getID() != key )
        {
            pItem = pItem->pNext;
        }
        return pItem;
    }

    void FreeLinkedList()
    {
        Employee* pItem ;
        while( pStart )
        {
            pItem = pStart;
            pStart = pStart->pNext;
            delete pItem;
        }
        pEnd = NULL;
    }

    void deleteNode(int Key)
    {
        Employee* pTarget = searchEmp(Key) ;
        if( pTarget )
        {
            if(pTarget == pStart) // DELETE FROM THE START
            {
                pStart = pStart->pNext;
                if( pStart )
                {
                    pStart->pPrev = NULL;
                }
                else
                {
                    pEnd = NULL;
                }
                delete pTarget;
            }
            else if(pTarget == pEnd) //DELETE FROM THE END
            {
                pEnd = pEnd->pPrev;
                delete pTarget;
                pEnd->pNext = NULL;
            }
            else // DELETE FROM MID
            {
                pTarget->pPrev->pNext = pTarget->pNext;
                pTarget->pNext->pPrev = pTarget->pPrev;
                delete pTarget;
            }
        }
        else
        {
            cout<<"the item is not in  the List"<<endl;
        }

    }
    void display()
    {
        Employee* pCurrent =pStart;
        while( pCurrent )
        {
            pCurrent->display();
            pCurrent = pCurrent->pNext;
        }
    }

    int countNodes()
    {
        int counter = 0;
        Employee* pCurrent = pStart;
        while(pCurrent)
        {
            counter++;
            pCurrent = pCurrent->pNext;
        }
        return counter;
    }

};





class BinaryTree
{
private:
    Employee* pParent;
    Employee* insert(Employee* pRoot, Employee* pData)
    {
        if(!pRoot->)
        {
            pData->pRight = NULL;
            pData->pLeft = NULL;
            return pData;
        }
        else
        {
            if( pData->getID()<= pRoot->getID())
            {
                pRoot->pLeft = insert(pRoot->pLeft , pData);
            }
            else if(pRoot->getID() < pData->getID())
            {
                pRoot->pRight = insert(pRoot->pRight , pData);
            }
            return pRoot;
        }
    }

    void inOrder(Employee* pRoot)
    {
        if(!pRoot)
            return;
        inOrder(pRoot->pLeft);
        pRoot->display();
        inOrder(pRoot->pRight);
    }
    void preOrder(Employee* pRoot)
    {
        if( ! pRoot)
        {
            return ;
        }
        pRoot->display();
        preOrder(pRoot->pLeft);
        preOrder(pRoot->pRight);
    }
    void postOrder(Employee* pRoot)
    {
        if( ! pRoot)
        {
            return;
        }
        postOrder(pRoot->pLeft);
        postOrder(pRoot->pRight);
        pRoot->display();
    }

    Employee* getLeaftNode(int key)
    {
        Employee* pRoot = searchNode(key);
        Employee* pItem = NULL;

        if( ! pParent )
        {
            return NULL;
        }
        if(pRoot->pRight)
        {
            pRoot = pRoot->pRight;
            while( pRoot->pLeft )
            {
                pRoot = pRoot->pLeft;
            }
        }
        else if(pRoot->pLeft)
        {
            pRoot = pRoot->pLeft;
            while( pRoot->pRight )
            {
                pRoot = pRoot->pRight;
            }
        }
        return pRoot;
    }

//    Employee* SearchNodeBefore(int key)
//    {
//        Employee* pRoot = pParent;
//        Employee* pItem = NULL;
//
//        if( ! pParent )
//        {
//            return NULL;
//        }
//        while( pRoot && pRoot->getID() != key )
//        {
//            if( pRoot->getID() > key )
//            {
//                pItem = pRoot;
//                pRoot = pRoot->pLeft;
//            }
//            else
//            {
//                pItem = pRoot;
//                pRoot = pRoot->pRight;
//            }
//        }
//        return pItem;
//    }
//

    Employee* findMin(Employee* pRoot)
    {
        while(pRoot->pLeft)
        {
            pRoot = pRoot->pLeft;
        }
        return pRoot;
    }

    Employee* deleteT(Employee* pRoot, int key)
    {
        Employee* pChild = NULL;

        if(pRoot == NULL )
        {
            return pRoot;
        }
        else if( key < pRoot->getID() )
        {
            pRoot->pLeft = deleteT(pRoot->pLeft, key);
        }
        else if( key > pRoot->getID() )
        {
            pRoot->pRight = deleteT(pRoot->pRight, key);
        }
        else
        {
            //Checking if its A Leaf Node
            if(!(pRoot->pLeft) && !(pRoot->pRight))
            {
                delete pRoot;
                pRoot = NULL;
                return pRoot;
            }
            //Checking if it has only Right Branch
            else if(!(pRoot->pLeft) && (pRoot->pRight))
            {
                pChild = pRoot->pRight ;
                delete pRoot;
                return pChild;
            }
            //Checking if it has only Left Branch
            else if((pRoot->pLeft) && !(pRoot->pRight))
            {
                pChild = pRoot->pLeft ;
                delete pRoot;
                return pChild;
            }
            //Checking if it has 2 Branches
            else
            {
                Employee* minRight=findMin(pRoot->pRight);
                pRoot->setID(minRight ->getID());
                pRoot->pRight = deleteT(pRoot->pRight,minRight->getID());
                return pRoot;
            }
        }
        return pRoot;
    }

    int getNodeHeight(Employee* pRoot )
    {
        int l =0, r = 0;
        if ( !pParent )
        {
            return 0;
        }
        l = getNodeHeight(pRoot->pLeft);
        r = getNodeHeight(pRoot->pRight);
        return (max(l, r)+1);
    }

    int pcountLeaves(Employee* pRoot )
    {
        int counter = 0 ;
        if(!pParent)
        {
            return 0;
        }
        if( (!pRoot->pLeft) &&(!pRoot->pRight) )
        {
            return 1;
        }
        if(pRoot->pLeft)
        {
            counter += pcountLeaves(pRoot->pLeft);
        }
        if(pRoot->pRight)
        {
            counter += pcountLeaves(pRoot->pRight);
        }
        return counter ;
    }

public:
    BinaryTree()
    {
        pParent = NULL;
    }
    void insertNode(int key)
    {
        Employee* pItem = new Employee(key);
        pParent = insert( pParent, pItem);
    }
    Employee* searchNode(int key)
    {
        if( ! pParent )
        {
            cout<<"There is no Employees !" <<endl;
            return NULL;
        }
        Employee* pRoot = pParent ;
        while( pRoot && pRoot->getID() != key )
        {
            if( pRoot->getID() > key )
            {
                pRoot = pRoot->pLeft;
            }
            else
            {
                pRoot = pRoot->pRight;
            }
        }
        return pRoot;
    }
    void inOrderTraverse()
    {
        if(!pParent)
        {
            cout<<"there is no employess"<<endl;
            return;
        }
        cout<<"InOrder Traverse is : "<<endl;
        inOrder(pParent);
    }
    void preOrderTraverse()
    {
        if(!pParent)
        {
            cout<<"there is no employess"<<endl;
            return;
        }
        cout<<"preOrder Traverse is : "<<endl;
        preOrder(pParent);
    }
    void postrderTraverse()
    {
        if(!pParent)
        {
            cout<<"there is no employess"<<endl;
            return;
        }
        cout<<"PostOrder Traverse is : "<<endl;
        postOrder(pParent);
    }
    void deleteNode(int key)
    {
        deleteT(pParent, key);
    }
    int getTreeHieght()
    {
        if(! pParent)
        {
            cout<<"There is No Tree!"<<endl;
            return 0;
        }
        return getNodeHeight(pParent)+1;
    }
    int listEmployeesV1(Employee* arr , int size)
    {
        Employee* pRoot = searchNode(arr[0].getID());
        int found = 1;
        if( pRoot ) // if the node i search for found pRoot = node else pRoot = NULL
        {
            int i = 0;
            while(i < size-1 )
            {
                if(arr[i+1].getID() < pRoot->getID())
                {
                    if( pRoot->pLeft && pRoot->pLeft->getID() == arr[i+1].getID())
                    {
                        pRoot = pRoot->pLeft;
                    }
                    else
                    {
                        found = 0;
                        break;
                    }
                }
                else if(arr[i+1].getID() > pRoot->getID())
                {
                    if( pRoot->pRight&&pRoot->pRight->getID() == arr[i+1].getID())
                    {
                        pRoot = pRoot->pRight;
                    }
                    else
                    {
                        found = 0;
                        break;
                    }
                }
                i++;
            }
        }
        return found;
    }
    int listEmployeesV2(Employee* arr , int size)
    {
        Employee* pRoot = searchNode(arr[0].getID());
        int found = 1;
        if( pRoot ) // if the node i search for found pRoot = node else pRoot = NULL
        {
            int i = 0;
             while(i < size-1)
            {
                int nextID = arr[i+1].getID();
                Employee* nextNode = ( (nextID>pRoot->getID()) ? pRoot->pRight:pRoot->pLeft);
                if(nextNode && nextNode->getID() == nextID)
                {
                    pRoot=nextNode;
                }
                else
                {
                    found = 0;
                    break;
                }
                i++;
            }
        }
        return found;
    }
    int linkedEmployees(LinkedList &l , int size)
    {
        int found = 1;
        Employee* currentListNode  = l.getfirstNode();
        if(!currentListNode)  // Check if list is empty
        {
            return 0;
        }
        Employee* pRoot = searchNode(currentListNode->getID());
        if( !pRoot ) // if the node i search for found pRoot = node else pRoot = NULL
        {
            return 0;
        }
        int i = 0;
        while(i < size-1)
        {
            int nextID = currentListNode ->pNext->getID();
            Employee* nextNode = ( (nextID > pRoot->getID()) ? pRoot->pRight : pRoot->pLeft);
            if(nextNode && nextNode->getID() == nextID)
            {
                pRoot=nextNode;
                currentListNode = currentListNode->pNext;
            }
            else
            {
                found = 0;
                break;
            }
            i++;
        }
        return found;
    }
    int countLeaves()
    {
        return pcountLeaves(pParent);
    }




};



int main()
{
    BinaryTree b;
    b.insertNode(50);
    b.insertNode(30);
    b.insertNode(70);
    b.insertNode(20);
    b.insertNode(40);
    b.insertNode(60);
    b.insertNode(80);
    b.insertNode(10);
    b.insertNode(25);
    b.insertNode(35);
    b.insertNode(45);
    b.insertNode(55);
    b.insertNode(65);
    b.insertNode(75);
    b.insertNode(85);
    cout<<"Tree Height is : "<<b.getTreeHieght()<<endl;
    b.inOrderTraverse();
//    b.preOrderTraverse();
//    b.postrderTraverse();
//    b.searchNode(10)->display();
//    b.deleteNode(10);
//    b.deleteNode(25);
//    b.deleteNode(85);
//    b.inOrderTraverse();
//    b.deleteNode(20);
//    b.inOrderTraverse();
//    b.deleteNode(80);
//    b.inOrderTraverse();
//    Employee e1(50) , e2(70) , e3(60);
//    LinkedList l ;
//    l.addList(&e1);
//    l.addList(&e2);
//    l.addList(&e3);
//    Employee arr[3] = {e1 ,e2 , e3};
//    int found = b.listEmployeesV1(arr , 3);
//    found?cout<<"Found successfully" <<endl : cout<<"OOPS Not Found !"<<endl;
//    found = b.listEmployeesV2(arr , 3);
//    found?cout<<"Found successfully" <<endl : cout<<"OOPS Not Found !"<<endl;
//    found = b.linkedEmployees(l , l.countNodes());
//    found?cout<<"Found successfully" <<endl : cout<<"OOPS Not Found !"<<endl;
//    b.SearchNodeBefore(0)->display();

    cout<<"Leaves Count = "<<b.countLeaves()<<endl;
    return 0;
}





//Employee* insert(Employee* pRoot, Employee* pData)
//    {
//        if( ! pRoot )
//        {
//            pData->pLeft = NULL;
//            pData->pRight = NULL;
//            return pData; // m3mltsh return l el pRoot 3lshan el pRoot da elly bt7rk beh enma hna msh ht7rk ana d elly htb2a el root 3la tool
//        }
//        else
//        {
//            if( pData->getID() <= pRoot->getID() )
//            {
//                pRoot->pLeft = insert(pRoot->pLeft, pData);
//            }
//            else
//            {
//                pRoot->pRight = insert(pRoot->pRight, pData);
//            }
//            return pRoot;
//        }
//    }









//        Employee* nBefore = SearchNodeBefore(key);
//        Employee* pItem = searchNode(key);
//        if( !(pItem->pLeft) && !(pItem->pRight) )
//        {
//            if(nBefore->pRight == pItem )
//            {
//                nBefore->pRight = NULL;
//            }
//            else if(nBefore->pLeft == pItem)
//            {
//                nBefore->pLeft = NULL;
//            }
//            return pItem;
//        }
//        else if( !(pItem->pLeft) && (pItem->pRight) )
//        {
//            Employee* child = pItem->pRight;
//            if(nBefore->pRight == pItem)
//            {
//                nBefore->pRight = child;
//            }
//            else if(nBefore->pLeft == pItem)
//            {
//                nBefore->pLeft = child;
//            }
//            return pItem;
//        }
//        else if( (pItem->pLeft) && !(pItem->pRight) )
//        {
//            Employee* child = pItem->pLeft;
//            if(nBefore->pRight == pItem)
//            {
//                nBefore->pRight = child;
//            }
//            else if(nBefore->pLeft == pItem)
//            {
//                nBefore->pLeft = child;
//            }
//            return pItem;
//        }
//


//        Employee* pCurrent = pItem;
//        while(pCurrent->pRight != NULL)
//        {
//            pCurrent = pCurrent->pRight;
//        }
//        pItem->setID( pCurrent->getID());
//        delete pCurrent;

