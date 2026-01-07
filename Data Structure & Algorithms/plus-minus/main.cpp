#include <iostream>
#include <iomanip>

using namespace std;

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

void plusMinus(int* arr) {
    int size = 8 ;
    float p = 0 , n = 0 , z = 0;

    for(int i = 0 ; i < size ; i++)
    {
        if(arr[i] > 0 )
            p++;
        else if (arr[i] < 0)
            n++;
        else
            z++;
    }
    cout<< fixed << setprecision(6) <<p/size <<endl;
    cout<< fixed << setprecision(6) <<n/size <<endl;
    cout<< fixed << setprecision(6) <<z/size <<endl;
}



int main()
{
    int arr[] = {1 ,2 ,3 ,-1 ,-2 ,-3 ,0 ,0};
    plusMinus(arr);
    return 0;
}
