#include <iostream>
#include <bits/stdc++.h>
#include <vector>

using namespace std;

int divisibleSumPairs(int n, int k, int* ar)
{
    int counter = 0;
    for(int i = 0 ; i < n ; i++) // n OR n-1?
    {
        for(int j = i+1 ; j < n ; j++)
        {
            if((ar[i] + ar[j] ) % k == 0 )
            {
                counter++;
            }
        }

    }
    return counter;
}


int main()
{
    int ar[] = {1,3,2,6,2,1};
    int n = 6 , k = 3;

    cout<<"the Result is : "<<divisibleSumPairs(n ,k , ar)<<endl;

    return 0;
}
