This JavaScript component enables the user to add an input box to their webpage, where the input will only except a valid phone number that has the following format: (123) 456-7890.

There are two event listeners for 1) keydown and 2) keyup.

The differences between keydown, keyup, and keypress are explained below:

1. Keydown
* This occurs when you press down on the keyboard.

2. Keyup
* This occurs right after you press a key on the keyboard. The event 

3. Keypress
* This occurs when you press down on "character" on the keyboard.

In the code, the keydown event listener is responsible for checking to make the input value is 1) a number and 2) has a length that is less than 13 characters. We cannot use the keyup event listener  to carry out this check since the callback will only be executed after the user's value has already been added to the input value. 

The keyup event listener is responsible for formatting the user's input value into the proper phone number format. We use keyup in this case instead of keydown since keydown will give us the input value right when the key was pressed. For example, if the input value was "123" and I pressed "4", the keydown callback would log the input value as "123" since it captures the value right when the key was pressed. On the other hand, keyup will provide us with the value in the input as soon as the key was released.