import type { Metadata } from "next";
import PostLayout from "@/components/PostLayout";

export const metadata: Metadata = {
  title: "DIY CNC Plotter — Sai Rajesh Tanikonda",
  description: "Building a 2-axis CNC plotting machine with Arduino UNO, GRBL firmware, and an ESP32 IoT layer for wireless control.",
};

export default function CncPost() {
  return (
    <PostLayout
      title="CNC Machine Using Arduino — DIY 2-Axis Plotter System"
      date="January 31, 2026"
      category="Hardware + IoT"
      stack={["Arduino", "ESP32", "Python", "GRBL", "IoT", "3D Printing"]}
    >
      <p>
        I built a 2-axis CNC plotter from scratch using an Arduino UNO, GRBL firmware, and a
        3D-printed frame. The machine takes digital designs, converts them to G-code, and
        physically draws them with a pen. Later I extended it with an ESP32 Wi-Fi layer so the
        whole thing could be controlled from a browser over the network.
      </p>

      <h2 data-num="01 — ARCHITECTURE">System Architecture</h2>
      <p>The system is split into four layers:</p>
      <ul>
        <li><strong>Design layer</strong> — Inkscape and Universal Gcode Sender on a PC generate the G-code</li>
        <li><strong>Connectivity layer</strong> — ESP32 module acts as a wireless bridge over Wi-Fi</li>
        <li><strong>Motion control layer</strong> — Arduino UNO running GRBL handles the actual movement</li>
        <li><strong>Mechanical layer</strong> — NEMA 17 steppers drive the X-Y axes</li>
      </ul>

      <h2 data-num="02 — HARDWARE">Electronics and Hardware</h2>
      <p>Main components:</p>
      <ul>
        <li>Arduino UNO with CNC Shield V3.0</li>
        <li>NEMA 17 stepper motors with A4988 drivers</li>
        <li>Linear rods with LM8UU bearings for smooth X-Y motion</li>
        <li>Mini servo motor for the pen lift mechanism</li>
        <li>ESP32 Wi-Fi module for remote control</li>
        <li>3D-printed frame and mounts</li>
        <li>12V power supply</li>
      </ul>

      <h2 data-num="03 — IOT">Adding Wi-Fi Control</h2>
      <p>
        Out of the box, GRBL machines are controlled over a wired USB connection. I wanted to
        remove that constraint, so I added an ESP32 between the network and the Arduino. The ESP32
        receives G-code jobs over Wi-Fi and forwards them to the Arduino via serial. Telemetry
        from the machine flows back the other way in real time.
      </p>
      <p>This gave the plotter a few capabilities it didn't have before:</p>
      <ul>
        <li>Wireless G-code transmission from any device on the network</li>
        <li>Browser-based interface for start, pause, and stop</li>
        <li>Live job progress and motor state monitoring</li>
        <li>Remote calibration and test routines</li>
        <li>Job completion and error notifications</li>
      </ul>

      <h2 data-num="04 — SOFTWARE">Python Scripts</h2>
      <p>
        I wrote Python scripts to handle serial communication with the Arduino and automate
        calibration routines. Mostly useful for testing motion sequences and logging telemetry
        during development.
      </p>
      <pre>{`# Serial communication with Arduino (GRBL)
import serial, time

ser = serial.Serial('/dev/ttyUSB0', 115200, timeout=1)
time.sleep(2)  # wait for GRBL init

def send_gcode(cmd):
    ser.write((cmd + '\\n').encode())
    return ser.readline().decode().strip()

# Send home command
print(send_gcode('$H'))
# Move to position
print(send_gcode('G0 X50 Y50 F1000'))`}</pre>

      <h2 data-num="05 — LEARNINGS">What I Learned</h2>
      <ul>
        <li><strong>GRBL is deceptively configurable.</strong> Most of the early calibration work came down to tuning step/mm values and acceleration limits — not code.</li>
        <li><strong>3D printing for rapid iteration.</strong> Being able to print a new mount or bracket overnight and test it the next day made the mechanical side much faster to iterate on.</li>
        <li><strong>Serial communication is simple but fragile.</strong> The ESP32-to-Arduino serial bridge worked well once I got the baud rates and buffer handling right, but it took some debugging to get there.</li>
        <li><strong>IoT adds surface area.</strong> Adding network connectivity means adding a whole new failure mode. Handling disconnects and job interruptions gracefully took more thought than the happy path.</li>
      </ul>
    </PostLayout>
  );
}
