export default async function handler(req, res) {
    if (req.method === "POST") {
      const scriptURL = "https://script.google.com/macros/s/AKfycbwnPbImFKoJtV6cg17zLSovbQTXm4oVEFY9yiLfHVrmAL7lBq8o5nYL4I6P61p6m9R0-g/exec";
  
      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        });
  
        const result = await response.text(); // Apps Script often returns text, not JSON
        res.status(200).json({ success: true, message: result });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  