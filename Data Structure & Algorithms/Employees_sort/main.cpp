#include <iostream>

using namespace std;
class Employee
{
private:
    int id ;
public:
    Employee()
    {
        id = 0;
    }
    Employee (int _id)
    {
        id  = _id;
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
    ~Employee() {};
};

void insertionSort(Employee* arr, int arrSize)
{
    for(int i = 0 ; i < arrSize-1 ; i++)
    {
        for(int j = i+1 ; j > 0 ; j--) // i cannot do <= to 0 because I use j to compare with all elements before j
        {
            if(arr[j-1] > arr[j])
            {
                int temp = arr[j-1].getID();
                arr[j-1].setID(arr[j].getID()) ;
                arr[j].setID(temp) ;
            }
        }
    }
}


int main()
{
    int n = 5;
    Employee arr[5] = {Employee{1},  Employee{7}, Employee{4}, Employee{3}, Employee{0} } ;
    for(int i = 0 ; i < 5 ; i++)
    {
        cout<< i<<"- Id of Emp number " << i << ": " <<arr[i].getID() << endl;
    }
    insertionSort(arr , n );
    cout<<endl;
    cout<<endl;
    for(int i = 0 ; i < 5 ; i++)
    {
        cout<< i<<"- Id of Emp number " << i << ": " <<arr[i].getID() << endl;
    }

    cout << "Hello world!" << endl;
    return 0;
}
