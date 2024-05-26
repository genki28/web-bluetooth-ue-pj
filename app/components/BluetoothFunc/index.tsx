export default function BluetoothFunc() {
  const initialize = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
      });
      console.log(device);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p>Welcome to Bluetooth Page!!</p>
      <button onClick={initialize}>Request Bluetooth Device</button>
    </div>
  );
}
