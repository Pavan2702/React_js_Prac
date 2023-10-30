#include<stdio.h>
int main()
{
	int i,j,n,m,a[n][m],b[n][m],c[n][m];
	printf("enter the value of row n ");
	scanf("%d",&n);
	printf("enter the value of row m ");
	scanf("%d",&m);
	for(i=0;i<n;i++)
	{
		for(j=0;j<m;j++)
		{
		printf("enter the value of a[%d][%d]",i,j);
		scanf("%d",&a[i][j]);
		}
	}
	
	
	for(i=0;i<n;i++)
	{
		for(j=0;j<m;j++)
		{
		printf("enter the value of b[%d][%d]",i,j);
		scanf("%d",&b[i][j]);
		}
	}
	for(i=0;i<n;i++)
	{
		for(j=0;j<m;j++)
		{
		c[i][j]=a[i][j]+b[i][j];
		}
	}
	for(i=0;i<n;i++)
	{
		for(j=0;j<m;j++)
		{
		printf("%d \t",c[i][j]);
		}
		printf("\n");
	}
	return 0; 
}
