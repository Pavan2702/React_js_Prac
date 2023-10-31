#include<stdio.h>
int main()
{
    int choice,days,years;
    printf("1 For convert years to days\n");
    printf("2 For convert days to years\n");
    printf("Enter your choice:");
	scanf("%d", &choice);

	switch (choice)
	{
    	case 1:
        printf("Enter the number of years: ");
        scanf("%d", &years);
        days = years * 365;
        printf("%d years is equal to %d days\n", years, days);
        break;

    	case 2:
        printf("Enter the number of days: ");
        scanf("%d", &days);
        years = days / 365;
        printf("%d days is equal to %d years\n", days, years);
        break;

    	default:
        printf("Invalid option. Please choose 1 or 2\n");
	}

	return 0;
}

