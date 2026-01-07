#include <iostream>
#include<string>
using namespace std;


// rooo7 3la online Compilerrrrrrr

string timeConversion(string s) {
    string newS = s;
    int hours = stoi(s.substr(0,2));
    if( s[8] == 'A' && hours == 12 )
    {
        newS.erase(0,2);
        newS.insert(0,"00");
    }
    else if(s[8] == 'P')
    {
        if(hours == 12)
        {
            hours = 12;
        }
        else
        {
            hours+=12;
        }
        newS.erase(0,2);
        newS.insert(0,to_string(hours));

    }


    newS.erase(8, 2);
    return newS;
}


int main()
{
    string s = "07:05:45PM";
    cout<<timeConversion(s)<<endl;
    return 0;
}

