<!-- filepath: /workspaces/chat-app-01/frontend/index.html -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>

    <!-- Dialogflow Messenger Integration -->
    <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
    <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
    <df-messenger
      project-id="gdgagenticai"
      agent-id="332baad7-ee93-4527-a2d3-3d347a3b3bce"
      language-code="en"
      max-query-length="-1">
      <df-messenger-chat-bubble
        chat-title="Travel bot">
      </df-messenger-chat-bubble>
    </df-messenger>
    <style>
      df-messenger {
        z-index: 999;
        position: fixed;
        --df-messenger-font-color: black;
        --df-messenger-font-family: Google Sans;
        --df-messenger-chat-background:rgb(0, 0, 0);
        --df-messenger-message-user-background:rgb(255, 255, 255);
        --df-messenger-message-bot-background: rgb(255, 0, 0);
        bottom: 16px;
        right: 16px;
      }
    </style>
  </body>
</html>