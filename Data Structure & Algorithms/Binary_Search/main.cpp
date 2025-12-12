#include <iostream>

using namespace std;

int binarySearch(int* arr , int n , int key)
{
    int left = 0 , right = n-1 ;
    while(right >= left)
    {
        int mid = right+left /2;
        if(key == arr[mid])
        {
            return mid;
        }
        else if(key > arr[mid])
        {
            right = mid+1;
        }
        else
        {
            left = mid-1;
        }
    }
    return -1;
}

int main()
{
    int arr[5] = {5, 4, 3, 2, 1};
    cout << "result is : "<< binarySearch(arr , 5 , 0) << endl;
    return 0;
}


