## 🆓 Free OpenAI Key

Api Base URL: `"http://gpt.catway.org/v1"`

Api Key: Currently, this API does not require an API key, so you can set it as `"."`.

## Installation

To use this API, you need the OpenAI Python package:

```bash
pip install openai
```

## Example Usage

Here’s a basic example of how to use the API with Python:

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://gpt.catway.org/v1",
    api_key="."  # You can leave the API key empty for now
)

chat_completion = client.chat.completions.create(
    messages=[{"role": "user", "content": "Are you gpt-3?"}],
    model="gpt-3.5-turbo" # or use "gpt-4-all"
)

print(chat_completion.choices[0].message.content)
```

## Features

- ✅ Supports GPT models: `gpt-4-all` and `gpt-3.5-turbo`
- ✅ Simple and easy-to-use API client
- ❌ **No** support for streaming responses
- ❌ **No** support for function calling

### Supported Models
- `gpt-4-all`
- `gpt-3.5-turbo`

## Usage

You can use the API to interact with GPT models by sending messages and receiving responses as shown in the example above.

## Support

If you find this project helpful, please give it a ⭐ on GitHub to show your support!

For updates and more content, join my Telegram channel: [https://t.me/H4xCh](https://t.me/H4xCh)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=H4xC0d3/FreeGPT&type=Date)](https://star-history.com/#H4xC0d3/FreeGPT&Date)
