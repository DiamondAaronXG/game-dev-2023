  let key;

  async function encryptMessage() {
    const message = document.getElementById("message").value;
    key = await window.crypto.subtle.generateKey(
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
    const encodedMessage = new TextEncoder().encode(message);
    const encryptedMessage = await window.crypto.subtle.encrypt(
      { name: "AES-GCM", iv: window.crypto.getRandomValues(new Uint8Array(12)) },
      key,
      encodedMessage
    );
    const encryptedArray = new Uint8Array(encryptedMessage);
    const encryptedHex = Array.from(encryptedArray).map(b => ("00" + b.toString(16)).slice(-2)).join("");
    document.getElementById("encrypted").value = encryptedHex;
  }

  async function decryptMessage() {
    const encryptedHex = document.getElementById("encrypted").value;
    if (!key) {
      alert("Key is missing. Please encrypt a message first.");
      return;
    }
    const encryptedArray = new Uint8Array(
      encryptedHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
    );
    const decryptedArray = await window.crypto.subtle.decrypt(
      { name: "AES-GCM", iv: encryptedArray.slice(0, 12) },
      key,
      encryptedArray
    );
    const decryptedMessage = new TextDecoder().decode(decryptedArray);
    document.getElementById("decrypted").value = decryptedMessage;
  }
