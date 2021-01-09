Group Work: Functions and Strings
----------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Recognize strings.
* Use string indices.
* Understand how slice works for both positive and negative indices.
* Use input and convert between strings and numbers.
* Recognize common string methods.

*Process Objectives:*

* Predict the output from code.
* Modify code to produce the correct output.

A **string** is a sequence of characters enclosed in quotes.  In Python you can use pairs of single
or double quotes to enclose a string.  You can even use tripe quotes when
a string covers more than one line.

String Indices
==================

.. fillintheblank:: funct_fitb_pogil_initials

    What is the first thing that will be printed when the code below runs?

    - :Jk: It prints the first letter of the first name and last letter of the last name.
      :.*: String indices start with 0 and -1 is the index of the last letter in a string.

.. activecode:: funct_ac_pogil_initials
    :caption: get_initials

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def get_initials(first, last):
        return first[0] + last[-1]

    # function definition
    def main():
        print(get_initials("J'Quan",'Alik'))
        print(type("Hello"))
        print(type(42))

    # function call
    main()

.. note::

   Use [index] to get a character from a string.  The first character in a string is at index 0 and the last is at the length of the string minus 1 (also know as index -1 in Python).

.. fillintheblank:: funct_fitb_string_type

    What type of thing is "Hello"?

    - :'?str'?: A string in Python is an object of the str class.
      :.*: What is the class name printed by print(type("Hello"))?

.. fillintheblank:: funct_fitb_int_type

    What type of thing is 42?

    - :'?int'?: An integer in Python is an object of the int class.
      :.*: What is the class name printed by print(type(42))?

.. fillintheblank:: funct_fitb_add_strings

    What is symbol that is used to add (concatenate) strings together?

    - :\+: Use + to append one string after another in Python.
      :.*: Check the code above and try again.


Fix the function ``get_initials`` above to return a string with the first letter of the first followed by the first letter of the last.

String Slices
==================

.. fillintheblank:: funct_fitb_pogil_short_name

    What is the last thing that will be printed when the code below runs?

    - :Sibs: The last thing it prints are the first two letters of the first name and the last two letters of the last name.
      :.*: A slice starts with the first number and ends before the second.  If the second is left off it goes to the end of the string. The last character in a string is at index -1.

.. activecode:: funct_ac_pogil_short_name
    :caption: get_short_name

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def get_short_name(first, last):
        print(len(first))
        print(len(last))
        return first[:2] + last[-2:]

    # function definition
    def main():
        print(get_short_name('Simona',"Jacobs"))

    # function call
    main()


.. note::

   Use a slice [start:end] to get a slice (substring) from a string. It will return a new string starting at the start and including all the characters up to just before the end (end - 1).

.. fillintheblank:: funct_fitb_three_char_slice
    :practice: T

    What will return a new string with just the first three characters from the string ``dna``?

    - :dna\[0\:3\]|\[:3\]: This will return a new string with the characters from index 0 to 2.
      :.*: Look at the note above and try again.

.. fillintheblank:: funct_fitb_last_three_char_slice
    :practice: T

    What will return a new string with just the last three characters from the string ``dna`` using a negative index?

    - :dna\[-3\:\]: This will return a new string with the last three characters in it.
      :.*: Read about negative indicies in Python and try again.

.. fillintheblank:: funct_fitb_start_slice_def
    :practice: T

    What index will the slice (substring) start with if the start index isn't specified?

    - :0: A slice starts at index 0 if the start isn't specified.
      :.*: Look at the code above and try again.

.. mchoice:: funt_mc_end_slice
   :practice: T

   What index is the default end index if it isn't specified in a slice?

   -   0

       -   This is the default start index

   -   -1 (the index of the last character)

       -   Since a slice does not include the character at the specified end index this would stop at the second to last character in the string

   -  the length of the string

      +   The slice returns a string with all the characters from the start to the end minus one.  That is the same as the length of the string minus one.


.. fillintheblank:: funct_fitb_len_string
    :practice: T

    What built-in function tells you the number of characters in a string?

    - :len: The len function takes a string and returns the number of characters in it.
      :.*: Look at the example code above.

Input and Converting Between Strings and Numbers
=================================================

.. activecode:: funct_ac_pogil_get_name
    :caption: get_initials

    Run the code below to see what it prints.
    ~~~~
    from datetime import datetime

    # function definition
    def get_name():
        first = input("What is your first name?")
        print("Hello " + first)
        age_str = input("What is your age?")
        today = datetime.today()
        age = int(age_str)
        birth_year = today.year - age
        print("You were born in " + str(birth_year) + " or " + str(birth_year - 1))

    # function call
    get_name()

.. fillintheblank:: funct_fitb_convert_string_int
    :practice: T

    What is the name of the built-in function that will convert a string to an integer?

    - :int: This will convert a string to an integer
      :.*: Look at the code above and try again.

.. fillintheblank:: funct_fitb_convert_int_string
    :practice: T

    What is the name of the built-in function that will convert an integer to a string?

    - :str: This will convert a number to a string.
      :.*: Look at the code above and try again.

String Methods
================

Strings have methods (functions) that operate on a string using **dot-notation** as shown in the example code below.

.. fillintheblank:: funct_fitb_string_method_pred
    :practice: T

    What will be returned from the ``get_user_name`` function below?

    - :malana_coffy: This will return the first name in lowercase followed by a _ and then the last name in lowercase.
      :.*: Remember that string methods don't change the original string.


.. activecode:: funct_ac_pogil_user_name
    :caption: get_user_name

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def get_user_name(first, last):
        print(first.lower())
        print(last.upper())
        print(last.replace("f", "1"))
        print(first.split("a"))
        user = first.lower() + "_" + last.lower()
        return user

    # function definition
    def main():
        print(get_user_name("Malana", "Coffy"))

    # function call
    main()

.. mchoice:: funct_mc_string_immutable
   :practice: T

   Do string methods like lower and replace modify the original string?

   -   Yes

       -   Check what was printed above.

   -   No

       +   Strings are immutable, which means they do not change.

.. dragndrop:: funct_string_methods_dnd
    :practice: T
    :feedback: Read the chapter on strings and try again
    :match_1: replace|||Returns a new string with all instances of the first specified character replaced with the second specified character.
    :match_2: lower|||Returns a new string with all of the characters in lowercase.
    :match_3: upper|||Returns a new string with all of the characters in uppercase.
    :match_4: split|||Returns a list of strings created by splitting the original string at the specified character.

    Drag each string method to the description of what it does.

.. fillintheblank:: funct_fitb_last_print_strip

    What is the last line that will be printed when the code below runs?

    - :2: It will print the index of the first match
      :.*: Run it and see what it does

.. activecode:: funct_ac_pogil_strip_methods
    :caption: Example with strip, rstrip, lstrip, and find

    Run the code below to see what it prints.
    ~~~~
    # function definition
    def test(the_string):
        print(len(the_string))
        print(the_string.strip())
        print(len(the_string.strip()))
        print(the_string.rstrip())
        print(len(the_string.rstrip()))
        print(the_string.lstrip())
        print(len(the_string.lstrip()))
        print(the_string.find('H'))

    # function definition
    def main():
        test("  Help!  ")

    # function call
    main()

.. dragndrop:: funct_string_methods2_dnd
    :practice: T
    :feedback: Read the chapter on strings and try again
    :match_1: strip|||Returns a new string with leading and trailing spaces removed.
    :match_2: rstrip|||Returns a new string with trailing spaces removed.
    :match_3: lstrip|||Returns a new string with leading spaces removed.
    :match_4: find|||Returns the starting index of a target string if found or -1 if not found.

    Drag each string method to the description of what it does.

For more information on string methods see `https://www.w3schools.com/python/python_ref_string.asp <https://www.w3schools.com/python/python_ref_string.asp>`_.