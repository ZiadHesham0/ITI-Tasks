#include <iostream>

using namespace std;


int sequentialSearch(int* arr , int n , int key)
{
    int i = 0 , found = 0 ;
    while(i < n)
    {
        if(arr[i] == key)
            return i;
        i++;
    }
    return -1;
}

int main()
{
    int arr[5] = {5, 4, 3, 2, 1};
    cout << "result is : "<< sequentialSearch(arr , 5 , 0) << endl;
    return 0;
}
