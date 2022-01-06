Words and sentences in Python
-------------------------------
.. index::
    single: Programming Language
    single: Reserved Words


Unlike human languages, the Python vocabulary is actually pretty small.
We call this "vocabulary" the "reserved words". These are words that
have very special meaning to Python. When Python sees these words in a
Python program, they have one and only one meaning to Python. Later as
you write programs you will make up your own words that have meaning to
you called *variables*. You will have great latitude in
choosing your names for your variables, but you cannot use any of
Python's reserved words as a name for a variable.

When we train a dog, we use special words like "sit", "stay", and
"fetch". When you talk to a dog and don't use any of the reserved words,
they just look at you with a quizzical look on their face until you say
a reserved word. For example, if you say, "I wish more people would walk
to improve their overall health", what most dogs likely hear is, "blah
blah blah *walk* blah blah blah blah." That is because
"walk" is a reserved word in dog language. Many might suggest that the
language between humans and cats has no reserved words [http://xkcd.com/231/].

The reserved words in the language where humans talk to Python include
the following:

.. code-block::

    and       del       global      not       with
    as        elif      if          or        yield
    assert    else      import      pass
    break     except    in          raise
    class     finally   is          return
    continue  for       lambda      try
    def       from      nonlocal    while



That is it, and unlike a dog, Python is already completely trained. When
you say "try", Python will try every time you say it without fail.

.. mchoice:: intro-words-mc-reserved
    :practice: T
    :multiple_answers:
    :answer_a: number
    :answer_b: class
    :answer_c: pass
    :answer_d: print
    :answer_e: try
    :correct: b,c,e
    :feedback_a: Number is not a reserved word in python.
    :feedback_b: The word class is used to create a new "class" or set of objects.
    :feedback_c: Pass is a null operation - nothing happens when it is used, making it a great placeholder for incomplete functions.
    :feedback_d: Print is a function in Python, but not a reserved word.
    :feedback_e: Try allows you to test a block of code for errors.

    Which of the following are reserved words? Select all that apply.

We will learn these reserved words and how they are used in good time,
but for now we will focus on the Python equivalent of "speak" (in
human-to-dog language). The nice thing about telling Python to speak is
that we can even tell it what to say by giving it a message in quotes:

.. activecode:: 01-active-hello
    :caption: Hello world

    print('Hello world!')


And we have even written our first syntactically correct Python
sentence. Our sentence starts with the function *print*
followed by a string of text of our choosing enclosed in single quotes.
The strings in the print statements are enclosed in quotes. Single
quotes and double quotes do the same thing; most people use single
quotes except in cases where a single quote (which is also an
apostrophe) appears in the string.


.. mchoice:: intro-words-mc-quotes
    :practice: T
    :answer_a: Single quotes are used for char variables, double quotes are used for string variables.
    :answer_b: Single quotes are used at the beginning of a string, double quotes are used at the end.
    :answer_c: Double quotes enclose a string containing single quotes.
    :answer_d: All of the above.
    :answer_e: None of the above.
    :correct: e
    :feedback_a: Python does not have a char type. Single **or** double quotes are used for strings.
    :feedback_b: When using quotes, a single quote needs to be followed by a single quote and a double quote needs to be followed by a double quote.
    :feedback_c: While this is common practice, it is not a rule. Single and double quotes do the same thing.
    :feedback_d: Try again!
    :feedback_e: You can use double and quotes interchangeably in Python.

    What is the difference between single and double quotes in Python?

.. fillintheblank:: intro-words-fitb-words
    :practice: T

    ________ words have only one meeting in Python and cannot be used as variable names.

    - :[Rr]eserved: Reserved words already have a meaning in Python that cannot be changed, like **if** or **for**.
      :.*: Try again!
