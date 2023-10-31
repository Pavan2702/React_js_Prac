import pandas as pd
import matplotlib.pyplot as plt

# Load stock data into a pandas dataframe
df = pd.read_csv("stock_data.csv")

# Plot the stock data
plt.plot(df["Date"], df["Close"])
plt.xlabel("Date")
plt.ylabel("Close Price")
plt.title("Stock Price Over Time")
plt.show()

# Calculate and plot the moving average
df["MA"] = df["Close"].rolling(window=14).mean()
plt.plot(df["Date"], df["Close"], label="Close Price")
plt.plot(df["Date"], df["MA"], label="Moving Average")
plt.xlabel("Date")
plt.ylabel("Close Price / Moving Average")
plt.title("Stock Price Over Time")
plt.legend()
plt.show()
