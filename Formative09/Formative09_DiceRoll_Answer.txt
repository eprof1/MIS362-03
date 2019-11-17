# Python 3 reference:  https://runestone.academy/runestone/static/thinkcspy/index.html

# import random module
import random

# create a numeric variable to set the upper range of permissible values
# ref: https://runestone.academy/runestone/static/thinkcspy/SimplePythonData/Variables.html
sides=6   # statement here

# create a Boolean variable that allows play while it is true
rolling = true   # statement here

# create While loop, ref:  https://runestone.academy/runestone/static/thinkcspy/MoreAboutIteration/ThewhileStatement.html?highlight=while
while rolling:   # statement here

    # obtain input from user by displaying message that explains how to 'roll' and how to 'quit'
    # ref: https://runestone.academy/runestone/static/thinkcspy/SimplePythonData/Input.html
    roll=input("Time to roll... Press ENTER to roll.  Q to Quit")    # statement here

    # create if/else conditional to determine if Q was not pressed
    # ref: https://runestone.academy/runestone/static/thinkcspy/Selection/ConditionalExecutionBinarySelection.html?highlight=else

    # if condition first, compare value of variable roll to q
    # ref: http://interactivepython.org/runestone/static/thinkcspy/Selection/BooleanValuesandBooleanExpressions.html?highlight=comparison
    if roll.lower() !="q":   # statement here

        # execute this code when prior statement is True

        # calculate a random number for toss of die, assign to die toss variable. Use 'randint' function.  Random Integer
        # ref: http://interactivepython.org/runestone/static/thinkcspy/GUIandEventDrivenProgramming/11_gui_program_example.html?highlight=randint
        number_rolled=randint(1,sides)    # statement here

        # print die toss variable result to screen
        # ref: http://interactivepython.org/runestone/static/thinkcspy/Functions/Functionsthatreturnvalues.html
        print("You rolled a ", number_rolled)     # statement here

    #else condition that executes when if statement is false.  'q' was pressed, rolling variable is false, so exit program
    else:                # statement here
        rolling=False    # statement here

# end of game, print a message to the player
print("Thank you for playing!")   # statement here