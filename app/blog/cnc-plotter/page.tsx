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
      <h2 data-num="01 — OVERVIEW">Overview</h2>
      <p>
        This project involved designing and building a low-cost CNC plotting machine using an Arduino
        UNO-based control system. The machine converts digital designs into physical drawings by
        interpreting G-code instructions and controlling stepper motors for precise X and Y axis motion.
      </p>
      <p>
        The system was later extended with an <strong>IoT connectivity layer</strong>, enabling remote job
        control, wireless G-code transmission, and live machine status monitoring over Wi-Fi — transforming
        the plotter from a locally controlled device into a <em>network-connected smart fabrication system</em>.
      </p>

      <h2 data-num="02 — ARCHITECTURE">System Architecture</h2>
      <p>The system operates across four layers:</p>
      <ul>
        <li><strong>Design & G-code Generation Layer</strong> — PC software (Inkscape, Universal Gcode Sender)</li>
        <li><strong>Connectivity Layer</strong> — ESP32 Wi-Fi module acting as a wireless bridge</li>
        <li><strong>Motion Control Layer</strong> — Arduino UNO running GRBL firmware</li>
        <li><strong>Mechanical Execution Layer</strong> — Stepper-driven X-Y axis system</li>
      </ul>

      <h2 data-num="03 — HARDWARE">Electronics & Hardware</h2>
      <p>Main components:</p>
      <ul>
        <li>Arduino UNO + CNC Shield V3.0</li>
        <li>NEMA 17 stepper motors with A4988 drivers</li>
        <li>Linear rods with LM8UU bearings for smooth X-Y motion</li>
        <li>Mini servo motor for pen lift mechanism</li>
        <li>ESP32 Wi-Fi module for IoT connectivity</li>
        <li>3D-printed frame and structural mounts</li>
        <li>12V power supply</li>
      </ul>

      <h2 data-num="04 — IOT">IoT Extension — Smart CNC Connectivity</h2>
      <p>
        To extend the system beyond a traditional desktop CNC setup, I integrated an{" "}
        <strong>ESP32-based IoT communication layer</strong> that acts as a wireless bridge between the
        machine and a networked control interface.
      </p>
      <p>Key capabilities:</p>
      <ul>
        <li>Wireless G-code transmission over Wi-Fi</li>
        <li>Browser-based control interface for start, pause, and stop operations</li>
        <li>Live machine status monitoring (job progress, motor state, uptime)</li>
        <li>Remote calibration and test routines</li>
        <li>Job completion and error notifications</li>
      </ul>
      <p>
        The ESP32 receives G-code commands over the network and streams them to the Arduino via serial
        communication. Telemetry data from the machine is sent back to the interface, enabling real-time
        monitoring. This introduced practical experience in{" "}
        <em>IoT device communication, embedded networking, remote system control, and real-time telemetry handling</em>.
      </p>

      <h2 data-num="05 — SOFTWARE">Software Workflow</h2>
      <p>
        I developed Python scripts to handle the software side of the system:
      </p>
      <ul>
        <li>Establish serial communication with the Arduino controller</li>
        <li>Automate G-code transmission and motion test routines for calibration</li>
        <li>Monitor controller responses and log machine telemetry from the IoT module</li>
      </ul>
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

      <h2 data-num="06 — LEARNINGS">Skills Developed</h2>
      <ul>
        <li><strong>CNC motion control systems</strong> and GRBL firmware configuration</li>
        <li><strong>3D printing</strong> for rapid mechanical prototyping</li>
        <li><strong>Embedded systems</strong> programming with Arduino</li>
        <li><strong>Python-based hardware communication</strong> over serial</li>
        <li><strong>IoT device integration</strong> and wireless control systems</li>
        <li><strong>Real-time telemetry monitoring</strong> and system-level integration</li>
      </ul>
      <p>
        The project strengthened my troubleshooting skills across multiple domains and demonstrated
        how traditional electromechanical systems can be transformed into smart, network-connected devices.
      </p>
    </PostLayout>
  );
}
