import requests
import re
from html2text import html2text
import os

def save_full_structure(problem_data):
    if not problem_data:
        return False

    title = problem_data.get("title", "Unknown Problem")
    difficulty = problem_data.get("difficulty", "Unknown")
    question_id = problem_data.get("questionId", "000")
    slug = problem_data.get("titleSlug")
    content_md = process_html_content(problem_data.get("content", ""))

    # Montar nome da pasta
    folder_name = f"{question_id}-{slug}"
    base_path = os.path.join("problems", "solutions", folder_name)

    try:
        # Criar diretórios
        os.makedirs(os.path.join(base_path, "en"), exist_ok=True)
        os.makedirs(os.path.join(base_path, "pt"), exist_ok=True)

        # Arquivos en/
        with open(os.path.join(base_path, "en", "description.md"), "w", encoding="utf-8") as f:
            f.write(f"# {question_id}. {title} ({difficulty})\n\n")
            f.write(content_md + "\n")

        with open(os.path.join(base_path, "en", "explanation.md"), "w", encoding="utf-8") as f:
            f.write("")

        # Arquivos pt/
        with open(os.path.join(base_path, "pt", "descricao.md"), "w", encoding="utf-8") as f:
            f.write("")

        with open(os.path.join(base_path, "pt", "explicacao.md"), "w", encoding="utf-8") as f:
            f.write("")

        # Arquivo solution.py (vazio por enquanto)
        with open(os.path.join(base_path, "solution.py"), "w", encoding="utf-8") as f:
            f.write("# Escreva sua solução aqui\n")

        return True

    except Exception as e:
        print(f"Erro ao salvar estrutura de diretórios: {e}")
        return False
    
    

def get_slug_by_id(problem_id):
    url = "https://leetcode.com/api/problems/all/"
    try:
        res = requests.get(url)
        res.raise_for_status()
        problems = res.json().get("stat_status_pairs", [])
        
        for item in problems:
            stat = item.get("stat", {})
            if str(stat.get("question_id")) == str(problem_id):
                return stat.get("question__title_slug")
        return None
    except Exception as e:
        print(f"Erro ao buscar o slug: {e}")
        return None

def get_problem_data(slug):
    url = "https://leetcode.com/graphql"
    headers = {
        "Content-Type": "application/json",
        "Referer": f"https://leetcode.com/problems/{slug}/"
    }
    payload = {
        "operationName": "questionData",
        "variables": { "titleSlug": slug },
        "query": """
        query questionData($titleSlug: String!) {
          question(titleSlug: $titleSlug) {
            questionId
            title
            titleSlug
            content
            difficulty
          }
        }
        """
    }

    try:
        res = requests.post(url, json=payload, headers=headers)
        res.raise_for_status()
        print(res.json())
        return res.json().get("data", {}).get("question", {})
    except Exception as e:
        print(f"Erro ao buscar dados do problema: {e}")
        return None

def process_html_content(html_content):
    if not html_content:
        return ""
    
    # Converter HTML para markdown
    markdown = html2text(html_content)
    markdown = re.sub(r'\n{3,}', '\n\n', markdown).strip()

    # Corrigir headers dos exemplos
    markdown = re.sub(r'\*\*Example (\d+):\*\*', r'## Example \1:', markdown)
    
    # Corrigir header dos constraints
    markdown = re.sub(r'\*\*Constraints:\*\*', r'## Constraints', markdown)

    # Remover negrito de Input/Output/Explanation
    markdown = re.sub(r'\*\*(Input|Output|Explanation):\*\*', r'\1:', markdown)

    # Indentar linhas de Input/Output/Explanation
    markdown = re.sub(r'^(Input:.*|Output:.*|Explanation:.*)', r'    \1', markdown, flags=re.MULTILINE)
    
    markdown = re.sub(r'\*\*Follow-up:\s*\*\*', r'**Follow-up:** ', markdown)


    return markdown

def save_problem_readme(problem_data):
    if not problem_data:
        return False

    title = problem_data.get("title", "Unknown Problem")
    difficulty = problem_data.get("difficulty", "Unknown")
    question_id = problem_data.get("questionId", "000")
    content_md = process_html_content(problem_data.get("content", ""))

    with open("README.md", "w", encoding="utf-8") as f:
        f.write(f"# {question_id}. {title} ({difficulty})\n\n")
        f.write(content_md + "\n")

    return True

def main():
    problem_id = input("Digite o ID do problema (ex: 1): ")
    print(f"Buscando slug para o problema ID {problem_id}...")
    
    slug = get_slug_by_id(problem_id)
    if not slug:
        print("Não foi possível encontrar o slug correspondente ao ID informado.")
        return

    print(f"Slug encontrado: {slug}")
    print(f"Buscando problema: {slug}...")

    problem_data = get_problem_data(slug)
    if not problem_data:
        print("Não foi possível obter os dados.")
        return

    print(f"Gerando README.md para: {problem_data['title']} ({problem_data['difficulty']})")
    
    if save_full_structure(problem_data):
        print("README.md gerado com sucesso!")
    else:
        print("Erro ao gerar README.md.")


if __name__ == "__main__":
    main()
