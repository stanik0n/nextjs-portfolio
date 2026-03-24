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
        I designed and built a low-cost CNC plotting machine using an Arduino UNO-based control
        system. The machine converts digital designs into physical drawings by interpreting G-code
        and controlling stepper motors for precise X and Y axis motion.
      </p>
      <p>
        Later I extended it with an <strong>ESP32 IoT layer</strong> for wireless G-code
        transmission, browser-based control, and live machine status monitoring — turning a
        locally controlled plotter into a network-connected fabrication system.
      </p>

      {/* Photos */}
      <img
        src="https://rajeshchowdary.com/wp-content/uploads/2026/01/Picture1-1024x683.jpg"
        alt="CNC Plotter build"
        style={{ width: "100%", borderRadius: "6px", margin: "8px 0" }}
      />
      <img
        src="https://rajeshchowdary.com/wp-content/uploads/2026/01/Plotter1-1024x571.jpg"
        alt="CNC Plotter in action"
        style={{ width: "100%", borderRadius: "6px", margin: "8px 0 24px" }}
      />

      <h2 data-num="01 — ARCHITECTURE">System Architecture</h2>
      <p>The system is split into four layers:</p>
      <ul>
        <li><strong>Design layer</strong> — Inkscape and Universal Gcode Sender on a PC generate the G-code</li>
        <li><strong>Connectivity layer</strong> — ESP32 module acts as a wireless bridge over Wi-Fi</li>
        <li><strong>Motion control layer</strong> — Arduino UNO running GRBL handles the actual movement</li>
        <li><strong>Mechanical layer</strong> — NEMA 17 steppers drive the X-Y axes</li>
      </ul>
      <img
        src="https://rajeshchowdary.com/wp-content/uploads/2026/01/Picture2-1-1024x439.jpg"
        alt="System architecture diagram"
        style={{ width: "100%", borderRadius: "6px", margin: "8px 0 24px" }}
      />

      <h2 data-num="02 — MECHANICAL">Mechanical Design</h2>
      <p>
        I built the frame and structural mounts using <strong>3D-printed components</strong>,
        which made it easy to iterate quickly and keep costs low. The motion system includes:
      </p>
      <ul>
        <li>X-Y axis linear motion with NEMA 17 stepper motors</li>
        <li>Linear rods with LM8UU bearings for smooth movement</li>
        <li>Servo-actuated pen lift mechanism</li>
      </ul>

      <h2 data-num="03 — HARDWARE">Electronics and Hardware</h2>
      <p>Main components:</p>
      <ul>
        <li>Arduino UNO with CNC Shield V3.0</li>
        <li>NEMA 17 stepper motors with A4988 drivers</li>
        <li>ESP32 Wi-Fi module for remote control</li>
        <li>Mini servo motor for pen lift</li>
        <li>12V power supply</li>
        <li>Linear bearings and guide rods</li>
      </ul>

      <h2 data-num="04 — IOT">Adding Wi-Fi Control</h2>
      <p>
        Out of the box, GRBL machines are controlled over a wired USB connection. I added an
        ESP32 between the network and the Arduino. The ESP32 receives G-code jobs over Wi-Fi
        and forwards them to the Arduino via serial. Telemetry flows back the other way in real time.
      </p>
      <p>This gave the plotter capabilities it didn't have before:</p>
      <ul>
        <li>Wireless G-code transmission from any device on the network</li>
        <li>Browser-based interface for start, pause, and stop</li>
        <li>Live job progress and motor state monitoring</li>
        <li>Remote calibration and test routines</li>
        <li>Job completion and error notifications</li>
      </ul>

      <h2 data-num="05 — SOFTWARE">Software Workflow</h2>
      <p>
        Designs were created in Inkscape, converted to G-code, and sent to the controller via
        Universal Gcode Sender or the wireless interface. I also wrote Python scripts to handle
        serial communication, automate calibration routines, and log telemetry during development.
      </p>
      <pre>{`# Serial communication with Arduino (GRBL)
import serial, time

ser = serial.Serial('/dev/ttyUSB0', 115200, timeout=1)
time.sleep(2)  # wait for GRBL init

def send_gcode(cmd):
    ser.write((cmd + '\\n').encode())
    return ser.readline().decode().strip()

print(send_gcode('$H'))           # home
print(send_gcode('G0 X50 Y50 F1000'))  # move`}</pre>

      <h2 data-num="06 — WORKING">Working Principle</h2>
      <p>
        A digital design is processed in Inkscape and exported as G-code. That G-code is sent
        either over USB or wirelessly through the ESP32. The Arduino running GRBL interprets
        the commands and drives the stepper motors, moving the X and Y axes while the pen
        mechanism draws on the surface. The IoT module monitors execution and sends live
        status back to the control interface.
      </p>

      <h2 data-num="07 — DEMO">Demo</h2>
      <video
        controls
        style={{ width: "100%", borderRadius: "6px", margin: "8px 0 24px" }}
        src="https://rajeshchowdary.com/wp-content/uploads/2026/01/A815EF3D-DC40-4EC6-9F67-E10F22FACA03.mp4"
      />

      <h2 data-num="08 — LEARNINGS">What I Learned</h2>
      <ul>
        <li><strong>GRBL is deceptively configurable.</strong> Most early calibration work came down to tuning step/mm values and acceleration limits, not code.</li>
        <li><strong>3D printing speeds up iteration.</strong> Being able to print a new mount overnight and test it the next day made the mechanical side much faster to develop.</li>
        <li><strong>Serial communication is simple but fragile.</strong> The ESP32-to-Arduino bridge worked well once baud rates and buffer handling were right, but it took real debugging to get there.</li>
        <li><strong>IoT adds failure surface area.</strong> Adding network connectivity means adding a new failure mode. Handling disconnects and job interruptions gracefully took more thought than the happy path.</li>
      </ul>
    </PostLayout>
  );
}
