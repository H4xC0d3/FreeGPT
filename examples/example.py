# pip install openai
from openai import OpenAI

client = OpenAI(
    base_url="http://gpt.catway.org/v1",
    api_key="sk-r4khWXD9FY4NkC7GO4jWfTSuB3G3cdS0yyBXKnO9F7Pjm4YC"
)

chat_completion = client.chat.completions.create(
    messages=[{"role": "user","content": "Are you gpt-3?"}],
    model="gpt-3.5-turbo" # or use "gpt-4-all"
)

print(chat_completion.choices[0].message.content)
