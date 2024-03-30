
## Getting Started

First, run the development server:

```bash
yarn install 
yarn dev
# or
npm install
npm run dev
```

I'm using the backend localhost:8080, one more thing, I had to modify the backend to enable CORS, here is the snippet I added to the main.py:

```py
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

you need this so frontend and backend connects, goodluck!

oh, before I go, I also modified the backend to return `company_website_link`, so this is the revised `class Company`:

```py
class Company(BaseModel):
    company_name: str
    company_description: str
    company_website_link: str # added, make sure its the same cause I depend on it in the frontned.
```