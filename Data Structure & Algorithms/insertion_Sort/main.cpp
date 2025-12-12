#include <iostream>

using namespace std;

void insertionSort(int* arr, int arrSize)
{
    for(int i = 0 ; i < arrSize-1 ; i++)
    {
        cout<<"step : #"<<i+1 <<endl;
        for(int j = i+1 ; j > 0 ; j--) // i cannot do <= to 0 because I use j to compare with all elements before j
        {
            if(arr[j] < arr[j-1])
            {
                int temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
            cout<<"arr become : ";
            for(int i = 0 ; i < arrSize ; i++)
            {
                cout<<arr[i]<<"   ";
            }
            cout<<endl;

        }
        cout<<endl;

    }
}

int main()
{
    int arr[5] = {5, 4, 3, 2, 1};
    insertionSort(arr, 5);
    cout<<"the Sorted array : ";
    for(int i = 0 ; i < 5 ; i++)
    {
        cout<<arr[i]<<"  ";
    }

    return 0;
}

