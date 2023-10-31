#include<stdio.h>
#include<string.h>

int main()
{
	float goldrate,silver_rate,gram,gold_earring,silver_earring,goldchain,
	silver_chain,totalbill,total;
	goldrate=5000;
	silver_rate=60;
	char ans,y,n;
	printf("WELOCME TO KALYAN JWELLERS\n");
	printf("AT NAVSARI\n");
	printf("MULTIPLE TYPES OF GOLD & SILVER JWELLERY AVAILABLE HERE\n");
	printf("1 for gold ear rings");
	printf("2 for silver ear rings")
	printf("3 for gold chain");
	printf("4 for silver chain");
	printf("5 for gold neckless");
	printf("6 for silver neckless");
	switch(c)
	{
		case 1:
			peintf("enter Quntety of gold Ear rings:-");
			scanf("%d",&qnt);
			gold_earring=goldrate*qn;
			printf("Total Amount of gold earring is %f",earring);
			break;
		case 2:
			peintf("enter Quntety of silver Ear rings:-");
			scanf("%d",&qnt);
			silver_earring=silver_rate*qn;
			printf("Total Amount of silver earring is %f",earring);
			break;	
		case 3:
			peintf("enter Quntety of gold chain:-");
			scanf("%d",&qnt);
			goldchain=goldrate*qn;
			printf("Total Amount of gold chain is %f",earring);
			break;
		case 4:
			peintf("enter Quntety of silver chain:-");
			scanf("%d",&qnt);
			silver_chain=goldrate*qn;
			printf("Total Amount of silver chain is %f",earring);
			break;
		case 5:
			peintf("enter Quntety of gold neckless:-");
			scanf("%d",&qnt);
			gold_neckless=goldrate*qn;
			printf("Total Amount of gold neckless is %f",earring);
			break;
		case 6:
			peintf("enter Quntety of silver neckless:-");
			scanf("%d",&qnt);
			silver_neckless=goldrate*qn;
			printf("Total Amount of silver neckless is %f",earring);
			break;			
	}

	totalbill=silverchain+earring;
	printf("%f + %f = %f is total amount\n",silverchain,earring,totalbill);
	char name[100],address[100],gender[10];
	int number[10];
	char ch=male;
	printf("enter your name:-");
	scanf("%s",name);
	printf("enter your address:-");
	scanf("%s",address);
	printf("enter your gender:-");
	scanf("%s",gender);
	printf("enter your mobile number:-");
	scanf("%d",number);
	if(gender=='male')
	{
		total=totalbill-totalbill*2/100;
		printf("total is %f",total);
	}
	else
	{
	    total=totalbill-totalbill*5/100;
		printf("total is %f",total);	
	}
	return 0;
}
