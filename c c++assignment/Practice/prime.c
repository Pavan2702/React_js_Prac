#include<stdio.h>
int main()
{
	int n;
	int div = 2;
	printf("Enter Value Of N:- ");
	scanf("%d",&n);
	while(div<=n){
		
		if(n%div == 0){
			printf("Non-Prime:- %d",n);
		}
		else{
			div = div + 1;
		}
		div++;
				printf("Prime:- %d",n);
	}

}
