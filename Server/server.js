
const http = require("http");

const PORT = process.env.PORT || 3000;

const auditFindings = [
  {
    id: "WEB-003",
    title: "Language selector keyboard accessibility",
    severity: "Medium",
    status: "Observed",
    recommendation:
      "Ensure the language selector is keyboard-focusable and operable using Enter and Space."
  },
  {
    id: "WEB-004",
    title: "Search field color contrast",
    severity: "Medium",
    status: "Observed",
    recommendation:
      "Verify text and background colors meet WCAG contrast requirements."
  },
  {
    id: "WEB-005",
    title: "Footer links keyboard navigation",
    severity: "Medium",
    status: "Observed",
    recommendation:
      "Ensure footer links are keyboard-focusable and display a visible focus indicator."
  },
  {
    id: "WEB-006",
    title: "Accessibility widget keyboard focus",
    severity: "Medium",
    status: "Observed",
    recommendation:
      "Ensure the accessibility widget can be reached and operated using the keyboard."
  }
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url === "/api/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      status: "ok",
      message: "Accessibility Audit API is running"
    }));
  }

  if (req.url === "/api/findings") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      total: auditFindings.length,
      findings: auditFindings
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    error: "Route not found",
    availableRoutes: ["/api/health", "/api/findings"]
  }));
});

server.listen(PORT, () => {
  console.log(`Accessibility Audit API running on port ${PORT}`);
});
