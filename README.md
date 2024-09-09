
# Free ChatGPT API

This is a free API for using GPT models, specifically `gpt-4-all` and `gpt-3.5-turbo`. This API provides simple access to GPT models, though it does **not** support streaming responses or function calling.

## Features

- Supports GPT models: `gpt-4-all` and `gpt-3.5-turbo`
- Simple and easy-to-use API client
- **No** support for streaming responses
- **No** support for function calling

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
    model="gpt-4-all",  # or use "gpt-3.5-turbo"
)

print(chat_completion.choices[0].message.content)
```

### Parameters

- `base_url`: The base URL for accessing the API (`http://gpt.catway.org/v1`)
- `api_key`: Currently, this API does not require an API key, so you can set it as `"."`.

### Supported Models
- `gpt-4-all`
- `gpt-3.5-turbo`

### Important Notes
- **No streaming support**: This API does not support streaming responses, so you will receive the entire response at once.
- **No function calling support**: Function calling is not implemented in this API.

## Installation

To use this API, you need the OpenAI Python package:

```bash
pip install openai
```

## Usage

You can use the API to interact with GPT models by sending messages and receiving responses as shown in the example above.
