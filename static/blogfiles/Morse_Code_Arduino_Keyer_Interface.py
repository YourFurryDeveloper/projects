import serial
import time
from pynput.keyboard import Key, Controller

keyboard = Controller()

ditKey = "z" # Dit side is the right side
dahKey = "x" # Dah side is the left side
leftHeld = False
rightHeld = True

ser = serial.Serial(
    port="/dev/ttyACM0", # Use COM{x} for Windows
    baudrate=115200,
    bytesize=serial.EIGHTBITS,
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    timeout=1
)
ser.close()
ser.open()
time.sleep(1)

arduino = False # Set to true if you're using an Arduino, and false if you're using a Micro:bit (my code is a little janky.)

while True:
    received_line_bytes = ser.readline()
    if received_line_bytes:
        data = received_line_bytes.decode('utf-8').strip()
        if data == "leftHeld" and not leftHeld:
            leftHeld = not arduino
            keyboard.press(dahKey)
        elif data == "leftReleased" and leftHeld:
            leftHeld = arduino
            keyboard.release(dahKey)
        elif data == "rightHeld" and not rightHeld:
            rightHeld = not arduino
            keyboard.press(ditKey)
        elif data == "rightReleased" and rightHeld:
            rightHeld = arduino
            keyboard.release(ditKey)

ser.close()
