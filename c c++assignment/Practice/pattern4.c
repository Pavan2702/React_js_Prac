#include <stdio.h>

int main() 
{
    int i,j;
    char alpha = 'A';
    
    for ( i = 1; i <= 5; i++) 
	{
        for (j = 1; j <= i; j++) 
		{
			if (j % 2 == 0) 
			{
                printf("A ");
            } else 
			{
                printf("%c ",alpha);
            }
        }
        printf("\n");
    }
    
    return 0;
}

