#include <iostream>

using namespace std;

void selectionSort(int* arr , int arrSize)
{
    for(int i = 0 ; i < arrSize-1 ; i++)
    {
        int min = i ;
        for(int j = i+1 ; j < arrSize ; j++)
        {
            if(arr[j] < arr[min])
            {
                min = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}

int main()
{
    int arr[5] = {5 , 4 , 3 , 2 , 1};
    selectionSort(arr , 5);
    cout<<"the Sorted array : " <<endl;
    for(int i = 0 ; i < 5 ; i++)
    {
        cout<<arr[i]<<endl;
    }
    return 0;
}
