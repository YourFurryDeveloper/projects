const int soundOutPin = 8;

const int paddleLeftPin = 2;
const int paddleRightPin = 3;
int paddleLeftState = 0;
int paddleRightState = 0;
int paddleLeftHeld = 0;
int paddleRightHeld = 0;

int paddleMode = 0; // 0 Is automatic paddle mode, and 1 is cootie paddle mode.
int wpm = 20;
int dotLength = 1200 / wpm;

int serialKeyMode = 1;

void setup() {
  Serial.begin(115200);
  pinMode(paddleLeftPin, INPUT_PULLUP);
  pinMode(paddleRightPin, INPUT_PULLUP);
}

void dot() { 
  tone(soundOutPin, 600);
  delay(dotLength);
  noTone(soundOutPin);
  delay(dotLength);
}

void dash() {
  tone(soundOutPin, 600); 
  delay(3 * dotLength);
  noTone(soundOutPin);
  delay(dotLength);
}

void loop() {
  paddleLeftState = digitalRead(paddleLeftPin);
  paddleRightState = digitalRead(paddleRightPin);

  if (serialKeyMode == 0) {
    if (paddleLeftState == LOW && paddleMode == 0) {
      dash();
    } else if (paddleRightState == LOW && paddleMode == 0) {
      dot();
    }
  } else if (serialKeyMode == 1) {
    if (paddleLeftState == LOW && paddleLeftHeld == 0) {
      paddleLeftHeld = 1;
      Serial.println("leftHeld");
    } else if (paddleLeftState == HIGH && paddleLeftHeld == 1) {
      paddleLeftHeld = 0;
      Serial.println("leftReleased");
    } else if (paddleRightState == LOW && paddleRightHeld == 0) {
      paddleRightHeld = 1;
      Serial.println("rightHeld");
    } else if (paddleRightState == HIGH && paddleRightHeld == 1) {
      paddleRightHeld = 0;
      Serial.println("rightReleased");
    }
  }

  if (paddleMode == 1) {
    while (paddleLeftState == LOW || paddleRightState == LOW) {
      tone(soundOutPin, 600);
    }
  }

  if (Serial.available() > 0) {
    String cmd = Serial.readString();
    if (cmd.indexOf("wpm") != -1) {
      String cmdStr = "wpm ";
      cmd.remove(cmd.indexOf(cmdStr), cmdStr.length());
      Serial.println("WPM is now ");
      Serial.print(cmd);
      wpm = cmd.toInt();
      Serial.println(wpm);
    }
  }
}