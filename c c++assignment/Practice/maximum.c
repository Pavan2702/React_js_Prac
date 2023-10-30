#include <stdio.h>

int main()
{
   int num, max = 0;
   
   printf("Enter a number: ");
   scanf("%d", &num);
   
   while (num != 0) 
   {
      int digit = num % 10;
      if (digit > max) 
	  {
         max = digit;
      }
      num=num / 10;
   }
   
   printf("The maximum digit in the number is: %d", max);
   
   return 0;
}

