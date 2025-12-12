#include <iostream>

using namespace std;


// Ensuring every loop that maximum element at its right place
void bubbleSort(int* arr, int arrSize)
{
    for(int i = 0 ; i < arrSize-1 ; i++)
    {
        int noSwapFlag = 0; //for checking if arr is already sorted
        cout<<"step : #"<<i+1 <<endl;
        for(int j = 0 ; j < arrSize-1-i ; j++)
        {
            if(arr[j] > arr[j+1])
            {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwapFlag = 1;
            }
            cout<<"arr become : ";
            for(int i = 0 ; i < arrSize ; i++)
            {
                cout<<arr[i]<<"   ";
            }
            cout<<endl;
        }
        if( !noSwapFlag )
            break; //if it's sorted then stop
    }
}


int main()
{
    int arr[5] = {5, 4, 3, 2, 1};
    bubbleSort(arr, 5);
    cout<<"the Sorted array : ";
    for(int i = 0 ; i < 5 ; i++)
    {
        cout<<arr[i]<<"  ";
    }
    return 0;
}
