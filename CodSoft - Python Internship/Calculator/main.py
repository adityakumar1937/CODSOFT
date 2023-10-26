# CodSoft - Simple Python Calculator 

# Input: Get the first and second numbers from the user
num_1 = int(input("Enter the first number: "))
num_2 = int(input("Enter the second number: "))

# Display a menu for arithmetic operations
print("\nChoose which arithmetic operation do you want to perform:")
print("1 for Addition")
print("2 for Subtraction")
print("3 for Multiplication")
print("4 for Division\n")

# Input: Get the user's choice of operation
choice = int(input("Enter your choice: "))

# Perform the selected arithmetic operation and display the result
if choice > 4:
    print("\nInvalid choice")
elif choice == 1:
    print(f"\nYour answer is = {num_1 + num_2}")
elif choice == 2:
    print(f"\nYour answer is = {num_1 - num_2}")
elif choice == 3:
    print(f"\nYour answer is = {num_1 * num_2}")
elif choice == 4:
    print(f"\nYour answer is = {round(num_1 / num_2)}")