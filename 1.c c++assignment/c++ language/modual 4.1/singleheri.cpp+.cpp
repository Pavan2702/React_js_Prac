 /*Assume a class cricketer is declared. Declare a derived class batsman from 
cricketer. Data member of batsman. Total runs, Average runs and best 
performance. Member functions input data, calculate average runs, Display 
data. (Single Inheritance)*/
class Cricketer 
{
  // Define the base class with any necessary data members and member functions
  // ...
};

class Batsman : public Cricketer 
{
  // Define the derived class with additional data members and member functions
  int totalRuns_;
  float averageRuns_;
  int bestPerformance_;

public:
  // Define member functions to input data, calculate average runs, and display data
  void inputData(int totalRuns, int bestPerformance) 
  {
    totalRuns_ = totalRuns;
    bestPerformance_ = bestPerformance;
    // Calculate the average runs from the input data
    averageRuns_ = static_cast<float>(totalRuns_) / static_cast<float>(bestPerformance_);
  }

  void displayData() 
  {
    cout << "Total Runs: " << totalRuns_ << std::endl;
    std::cout << "Average Runs: " << averageRuns_ << std::endl;
    std::cout << "Best Performance: " << bestPerformance_ << std::endl;
  }
};

