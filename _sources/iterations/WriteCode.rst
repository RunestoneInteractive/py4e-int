Write Code Questions
--------------------
.. warning:: Be careful not to create infinite loops, as they will cause the page to freeze.

#.
    .. tabbed:: itr-ex-countdown

        .. tab:: Question

            Fix the 5 errors in the code below to print a countdown of the numbers from 10 to 0, including 0.

            .. activecode:: itr-ex-countdownq
                :practice: T
                
                def countdown():
                    counter = 10
                    while Counter > 0:
                        Print(counter)
                        counter = counter + 1

                countDown()

        .. tab:: Answer

            .. activecode:: itr-ex-countdowna

                def countdown():
                    counter = 10
                    # Keep running loop until counter equals 0 (use <=)
                    # Use correct variable name (counter is lowercase)
                    while counter >= 0:
                        # Keyword print is lowercase
                        print(counter)
                        # Decrement to lower the counter
                        counter = counter - 1
                # Call correct function name (countdown)
                countdown()

#.
    .. activecode:: itr-ex-100Loopq
        :practice: T

        The following code will loop way too many times. Change one line to
        make the loop only have five iterations.
        ~~~~
        x = 5
        while x < 100:
            print(x)
            x = x + 1


#.
    .. tabbed:: itr-ex-count

        .. tab:: Question

            Make 5 changes to the code below to correctly print a count up from -10 to 0, including 0.

            .. activecode:: itr-ex-countq
                :practice: T
                :autograde: unittest

                output = ""
                x = -10
                while x < 0
                    x = x - 1
                output = output + str(x) + " "
                print(output

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(output,"-10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 ")

                myTests().main()


        .. tab:: Answer

            .. activecode:: itr-ex-counta

                output = ""
                # Start x at -11 so it stays under 0
                x = -11
                # First line of a loop ends with a colon (:)
                while x < 0:
                    # Since the iteration variable is negative, increase the count
                    x = x + 1
                    # Output reassignment is within the loop
                    output = output + str(x) + " "
                # Close print parentheses
                print(output)


#.
    .. activecode:: itr-ex-allValuesq
        :practice: T
        :autograde: unittest

        Finish lines 1 and 5 so that the following code correctly prints every integer from -5 to -1, including -1.
        ~~~~
        output =
        x = -5
        while x < 0:
            output = output + str(x) + " "
            x =
        print(output)

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(output,"-5 -4 -3 -2 -1 ")

        myTests().main()


#.
    .. tabbed:: itr-ex-six

        .. tab:: Question

            Complete the code on lines 4 and 6 so that it prints the number 6.

            .. activecode:: itr-ex-sixq
                :practice: T
                :autograde: unittest

                x = 3
                i = 0
                while i < 3:
                    x =
                    i = i + 1
                print()

                ====
                from unittest.gui import TestCaseGui
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(x,6)

                myTests().main()

        .. tab:: Answer

            .. activecode:: itr-ex-sixa

                x = 3
                i = 0
                while i < 3:
                    # Increase x by 1 for each run of the loop
                    x = x + 1
                    i = i + 1
                # Print the x variable
                print(x)

#.
    .. activecode::  itr-ex-rootq
        :practice: T

        The code below is supposed to print an estimate of the square root of a number, but
        the indention is wrong on 4 lines. Fix these errors to find the estimate.
        ~~~~
        target = 6
            guess = 2
        guessSquared = guess * guess
        while abs(target-guessSquared) > 0.01:
            closer = target / guess
        guess = (guess + closer) / 2.0
                guessSquared = guess * guess
            print("Square root of", target, "is", guess)


#.
    .. tabbed:: int-ex-inclusive

        .. tab:: Question

            This function currently takes a start and stop argument and uses a for
            loop to find the sum of all the numbers between them (inclusive). Change
            the for loop to a while loop while still using the same parameters.

            .. activecode:: int-ex-inclusiveq
                :practice: T
                :autograde: unittest

                def sumFunc(start, stop):
                    sum = 0
                    for num in range(start, stop + 1):
                        sum = sum + num
                    return sum

                print(sumFunc(1,10))

                ====
                from unittest.gui import TestCaseGui
                
                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(sumFunc(1, 10),55,"Tested sumFunc on inputs 1 and 10")
                        self.assertEqual(sumFunc(10, 3),0,"Tested sumFunc on inputs 10 and 3")
                        self.assertEqual(sumFunc(-5, 0),-15,"Tested sumFunc on inputs 20 and 50")
                        self.assertEqual(sumFunc(-3, 12),72,"Tested sumFunc on inputs -3 and 12")

                myTests().main()


        .. tab:: Answer

            .. activecode:: int-ex-inclusivea

                def sumFunc(start, stop):
                    sum = 0
                    # Create an iteration variable, initialized to the start argument
                    num = start
                    # Use while loop until iteration variable is less than
                    # or equal to stop argument
                    while num <= stop:
                        # Add number to sum
                        sum = sum + num
                        # Increase iteration variable
                        num += 1
                    # Return the sum
                    return sum

                print(sumFunc(1,10))

#.
    .. activecode::  int-ex-timesq
        :practice: T
        :autograde: unittest

        The program below is supposed to print the times tables from 1 to 3, but
        there are 5 errors.  Fix the errors.
        ~~~~
        for x in range(1, 3):
            for y in range(1, 4)
                print(str(x) + " * " str(y) + " = " x * y)

#.
    .. tabbed:: int-ex-timesWhile

        .. tab:: Question

            The following code prints the times tables for 1 to 3 using two for loops.
            Rewrite the program to use a while and a for loop instead.

            .. activecode::  int-ex-timesWhileq
                :nocodelens:

                for x in range(1, 4):
                    for y in range(1, 4):
                        print(str(x) + " * " + str(y) + " = " + str(x * y))

        .. tab:: Answer

            .. activecode:: int-ex-timesWhileA
                :optional:

                # There are a few different ways this can be done
                # One is shown here

                for x in range(1, 4):
                    # Create an iteration variable, starting in the range
                    y = 1
                    # Use while loop if the iteration variable is less than 4
                    while y < 4:
                        # Print the string
                        print(str(x) + " * " + str(y) + " = " + str(x * y))
                        # Increment the iteration variable
                        y = y + 1

#.
    .. activecode:: int-ex-whileq
        :practice: T
        :autograde: unittest

        Rewrite the following code to use a while loop instead of a for loop.
        ~~~~
        product = 1  # Start out with nothing
        numbers = range(1,11)
        for number in numbers:
            product = product * number
        print(product)

        ====
        from unittest.gui import TestCaseGui
        class myTests(TestCaseGui):

            def testOne(self):
                self.assertEqual(product, 3628800)

        myTests().main()
