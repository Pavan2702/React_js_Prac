// C++ program to sort an array
#include<iostream>
using namespace std;
class arr
{
public:
int a[1],i;
void ma()
{

cout<<"Enter the values:-";
for(i=0;i<1;i++)
{
cin>>a[i];
}
}

int b[1],j;
void trix()
{
cout<<"Enter the value:-";
for(j=0;j<1;j++)
{
cin>>b[j];
}
}
void operator+();
};
void arr::operator+()
{
int sum;
cout<<"Addition is:-";
for(i=0;i<1;i++)
{
for(j=0;j<1;j++)
{
sum=a[i]+b[j];
cout<<sum;
}
}
}
int main()
{
arr obj;
obj.ma();
obj.trix();
//obj.operator+();
+obj;
 return 0;
}
