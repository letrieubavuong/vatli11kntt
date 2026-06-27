import os
import re
import json
import shutil

# Metadata for mapping files to lessons and chapters for Grade 11
LESSON_METADATA = {
    "2P1M1": {"title": "Bài 1: Dao động điều hoà", "id": "bai-1", "chapter": "chuong-1", "type": "theory"},
    "2P1M2": {"title": "Bài 2: Vận tốc và gia tốc trong dao động điều hoà", "id": "bai-2", "chapter": "chuong-1", "type": "theory"},
    "2P1M3": {"title": "Bài 3: Phương pháp đường tròn trong dao động điều hoà", "id": "bai-3", "chapter": "chuong-1", "type": "theory"},
    "2P1M4": {"title": "Bài 4: Con lắc lò xo", "id": "bai-4", "chapter": "chuong-1", "type": "theory"},
    "2P1M5": {"title": "Bài 5: Con lắc đơn", "id": "bai-5", "chapter": "chuong-1", "type": "theory"},
    "2P1M6": {"title": "Bài 6: Các loại dao động", "id": "bai-6", "chapter": "chuong-1", "type": "theory"},
    "2L1.1": {"title": "Ôn tập Chương I - Đề 1", "id": "on-tap-1", "chapter": "chuong-1", "type": "review"},
    "2L1.2": {"title": "Ôn tập Chương I - Đề 2", "id": "on-tap-2", "chapter": "chuong-1", "type": "review"},
    "2L1.3": {"title": "Ôn tập Chương I - Đề 3", "id": "on-tap-3", "chapter": "chuong-1", "type": "review"}
}

CHAPTERS = [
    {"id": "chuong-1", "title": "Chương I: Dao động cơ học", "lessons": []}
]

def parse_braces(text, start):
    if start >= len(text) or text[start] != '{':
        return "", start
    count = 1
    i = start + 1
    while i < len(text) and count > 0:
        if text[i] == '{':
            count += 1
        elif text[i] == '}':
            count -= 1
        i += 1
    return text[start+1:i-1], i

def process_boder_commands(content):
    idx = 0
    while True:
        match = re.search(r'\\boder{', content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        start_braces = match_start + 6
        
        inner_content, end_idx = parse_braces(content, start_braces)
        
        text_before = content[:match_start]
        in_align = text_before.count(r'\begin{align*}') > text_before.count(r'\end{align*}')
        in_bracket = text_before.count(r'\[') > text_before.count(r'\]')
        
        if in_align or in_bracket:
            replacement = f"\\boxed{{{inner_content}}}"
        else:
            in_center = text_before.count(r'\begin{center}') > text_before.count(r'\end{center}')
            if in_center:
                replacement = f"\n$$\n\\boxed{{{inner_content}}}\n$$\n"
            else:
                replacement = f"$\\boxed{{{inner_content}}}$"
                
        content = content[:match_start] + replacement + content[end_idx:]
        idx = match_start + len(replacement)
        
    return content

def process_note_environment(content):
    idx = 0
    while True:
        match = re.search(r'\\begin{note}', content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        end_match = re.search(r'\\end{note}', content[match_start:])
        if not end_match:
            break
        end_idx = match_start + end_match.end()
        
        body = content[match_start + 12 : end_idx - 10]
        lines = body.strip().split('\n')
        blockquote = '\n'.join(f"> **Lưu ý:** {line}" if i == 0 else f"> {line}" for i, line in enumerate(lines))
        
        replacement = f"\n\n{blockquote}\n\n"
        content = content[:match_start] + replacement + content[end_idx:]
        idx = match_start + len(replacement)
    return content

def process_note_commands(content):
    idx = 0
    while True:
        match = re.search(r'\\Note{', content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        start_braces = match_start + 5
        
        inner_content, end_idx = parse_braces(content, start_braces)
        lines = inner_content.strip().split('\n')
        blockquote = '\n'.join(f"> **Chú ý:** {line}" if i == 0 else f"> {line}" for i, line in enumerate(lines))
        
        replacement = f"\n\n{blockquote}\n\n"
        content = content[:match_start] + replacement + content[end_idx:]
        idx = match_start + len(replacement)
    return content

def process_ghichu_commands(content):
    idx = 0
    while True:
        match = re.search(r'\\newghichu{', content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        start_braces = match_start + 10
        
        inner_content, end_idx = parse_braces(content, start_braces)
        lines = inner_content.strip().split('\n')
        blockquote = '\n'.join(f"> **Lưu ý:** {line}" if i == 0 else f"> {line}" for i, line in enumerate(lines))
        
        replacement = f"\n\n{blockquote}\n\n"
        content = content[:match_start] + replacement + content[end_idx:]
        idx = match_start + len(replacement)
    return content


def process_bang_environments(content):
    idx = 0
    while True:
        match = re.search(r'\\begin{bang}(?:\[.*?\])?', content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        # Find the start of the title brace '{'
        start_braces = content.find('{', match_start + len(match.group(0)) - 1)
        if start_braces == -1:
            idx = match_start + len(match.group(0))
            continue
            
        title, after_title_idx = parse_braces(content, start_braces)
        
        end_match = re.search(r'\\end{bang}', content[after_title_idx:])
        if not end_match:
            break
        end_idx = after_title_idx + end_match.end()
        
        table_body = content[after_title_idx : after_title_idx + end_match.start()]
        md_table = convert_tabular_to_md(table_body)
        
        replacement = f"\n\n__BANG_START__{title}\n{md_table.strip()}\n__BANG_END__\n\n"
        content = content[:match_start] + replacement + content[end_idx:]
        idx = match_start + len(replacement)
    return content



def convert_tabular_to_md(table_content):
    rows = table_content.split('\\\\')
    lines = []
    for row in rows:
        row = row.strip()
        if not row or row.startswith('%'):
            continue
        row = re.sub(r'^\\hline\s*', '', row)
        row = re.sub(r'\s*\\hline$', '', row)
        row = row.strip()
        if not row:
            continue
        cells = row.split('&')
        cleaned_cells = []
        for cell in cells:
            cell = cell.replace('\\hline', '').replace('\\bf', '').replace('\\it', '').strip()
            cell = re.sub(r'\\textbf{([\s\S]*?)}', r'\1', cell)
            cell = re.sub(r'\\textit{([\s\S]*?)}', r'\1', cell)
            cell = cell.strip('{}')
            cleaned_cells.append(cell)
        if any(cleaned_cells):
            lines.append(cleaned_cells)
            
    if not lines:
        return ""
        
    num_cols = max(len(row) for row in lines)
    markdown_rows = []
    for i, row in enumerate(lines):
        while len(row) < num_cols:
            row.append("")
        markdown_rows.append("| " + " | ".join(row) + " |")
        if i == 0:
            markdown_rows.append("| " + " | ".join(["---"] * num_cols) + " |")
            
    return "\n" + "\n".join(markdown_rows) + "\n"

def check_image_exists(image_name):
    public_images_dir = "C:/Users/ThayVuongNTK/Documents/GitHub/vatli11kntt/public/images"
    clean_name = image_name.replace('"', '').replace("'", "").strip()
    if clean_name.startswith("Images/"):
        clean_name = clean_name[7:]
    elif clean_name.startswith("images/"):
        clean_name = clean_name[7:]
    
    for ext in ['.png', '.jpg', '.jpeg', '.svg']:
        full_path = os.path.join(public_images_dir, clean_name + ext)
        if os.path.exists(full_path):
            return f"images/{clean_name}{ext}"
    # Default fallback
    return f"images/{clean_name}.png"

def clean_latex_content(content, lesson_id):
    # Normalize missing backslashes in source typos
    content = re.sub(r'\\?immini', r'\\immini', content)
    content = re.sub(r'\\?includegraphics', r'\\includegraphics', content)

    # 2. Extract Tikzpictures and replace with [TIKZ: url|code] tags
    tikz_counter = 1
    idx = 0
    while True:
        match = re.search(r'\\begin{tikzpicture}', content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        end_match = re.search(r'\\end{tikzpicture}', content[match_start:])
        if not end_match:
            break
        end_idx = match_start + end_match.end()
        tikz_code = content[match_start:end_idx]
        
        # Check if the compiled SVG exists
        svg_url = f"/images/tikz/tikz_{lesson_id}_{tikz_counter}.svg"
        dest_path = f"C:/Users/ThayVuongNTK/Documents/GitHub/vatli11kntt/public/images/tikz/tikz_{lesson_id}_{tikz_counter}.svg"
        
        if os.path.exists(dest_path):
            replacement = f"\n__TIKZ_START__{svg_url}|{tikz_code}__TIKZ_END__\n"
        else:
            replacement = f"\n__TIKZ_START__placeholder|{tikz_code}__TIKZ_END__\n"
            
        content = content[:match_start] + replacement + content[end_idx:]
        idx = match_start + len(replacement)
        tikz_counter += 1

    # 3. Parse \Binhluan{TEXT1}{TEXT2}
    idx = 0
    while True:
        match = re.search(r'\\Binhluan', content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        start_braces = match_start + 9
        
        text_content, next_idx = parse_braces(content, start_braces)
        second_start = content.find('{', next_idx)
        comment_content, end_idx = parse_braces(content, second_start)
        
        comment_lines = comment_content.strip().split('\n')
        comment_blockquote = '\n'.join(f"> *Bình luận:* {line}" if i == 0 else f"> {line}" for i, line in enumerate(comment_lines))
        
        replacement = f"\n\n{text_content}\n\n{comment_blockquote}\n\n"
        content = content[:match_start] + replacement + content[end_idx:]
        idx = match_start + len(replacement)

    # 4. Parse \immini{TEXT}{ILLUSTRATION}
    idx = 0
    while True:
        match = re.search(r'\\immini', content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        start_braces = match_start + 7
        if start_braces < len(content) and content[start_braces] == '[':
            end_bracket = content.find(']', start_braces)
            if end_bracket != -1:
                start_braces = end_bracket + 1
        
        text_content, next_idx = parse_braces(content, start_braces)
        second_start = content.find('{', next_idx)
        illustration_content, end_idx = parse_braces(content, second_start)
        
        replacement = f"\n\n{text_content}\n\n{illustration_content}\n\n"
        content = content[:match_start] + replacement + content[end_idx:]
        idx = match_start + len(replacement)

    # 5. Parse \begin{tabular} ... \end{tabular}
    idx = 0
    while True:
        match = re.search(r'\\begin{tabular}', content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        end_match = re.search(r'\\end{tabular}', content[match_start:])
        if not end_match:
            break
        end_idx = match_start + end_match.end()
        
        table_start_brace = content.find('{', match_start + 15)
        _, table_content_start_idx = parse_braces(content, table_start_brace)
        
        table_body = content[table_content_start_idx : end_idx - 13]
        md_table = convert_tabular_to_md(table_body)
        
        content = content[:match_start] + md_table + content[end_idx:]
        idx = match_start + len(md_table)

    # 6. Replace custom class macros context-aware
    content = process_boder_commands(content)
    content = process_note_environment(content)
    content = process_note_commands(content)
    content = process_ghichu_commands(content)
    content = process_bang_environments(content)

    # Headings
    content = re.sub(r'\\subsection\*?{([\s\S]*?)}', r'## \1', content)
    content = re.sub(r'\\subsubsection\*?{([\s\S]*?)}', r'### \1', content)
    content = re.sub(r'\\paragraph\*?{([\s\S]*?)}', r'#### \1', content)
    
    # Text styles
    content = re.sub(r'\\textbf{([\s\S]*?)}', r'**\1**', content)
    content = re.sub(r'\\textit{([\s\S]*?)}', r'*\1*', content)
    content = re.sub(r'{\\bf\s+([\s\S]*?)}', r'**\1**', content)
    content = re.sub(r'{\\it\s+([\s\S]*?)}', r'*\1*', content)

    # Emojis and FontAwesome replacements
    content = content.replace(r'\faSignIn', '👉')
    content = content.replace(r'\faTags', '🏷️')
    content = content.replace(r'\faEdit', '📝')

    # Clean environments list
    content = content.replace('\\begin{itemchoice}', '\n').replace('\\end{itemchoice}', '\n').replace('\\end{- choice}', '\n')
    content = content.replace('\\begin{itemize}', '\n').replace('\\end{itemize}', '\n')
    content = content.replace('\\begin{enumerate}', '\n').replace('\\end{enumerate}', '\n')
    content = content.replace('\\begin{enumEX}', '\n').replace('\\end{enumEX}', '\n')
    content = content.replace('\\begin{enumEX}[\\faEdit]{3}', '\n').replace('\\begin{enumEX}[\\faEdit]{2}', '\n').replace('\\begin{enumEX}[\\faEdit]{1}', '\n')

    # Convert \item
    content = re.sub(r'\\item\s*\[(.*?)\]', r'- **\1** ', content)
    content = re.sub(r'\\itemch', r'- ', content)
    content = re.sub(r'\\item', r'- ', content)
    content = content.replace('- ch', '- ')

    # Convert \includegraphics
    def replace_image(match):
        img_path = match.group(1).strip()
        clean_path = check_image_exists(img_path)
        return f"\n![Hình ảnh](/{clean_path})\n"
        
    content = re.sub(r'\\includegraphics\[.*?\]{([\s\S]*?)}', replace_image, content)
    content = re.sub(r'\\includegraphics{([\s\S]*?)}', replace_image, content)

    # Math environments
    content = content.replace('\\begin{align*}', '\n$$\n\\begin{aligned}').replace('\\end{align*}', '\\end{aligned}\n$$\n')
    content = content.replace('\\begin{center}', '\n').replace('\\end{center}', '\n')
    content = content.replace('\\[', '\n$$\n').replace('\\]', '\n$$\n')
    content = content.replace('\\(', '$').replace('\\)', '$')

    # Clean other LaTeX clutter
    content = content.replace('\\noindent', '')
    content = content.replace('\\par', '\n\n')
    content = content.replace('\\cleardoublepage', '')
    content = re.sub(r'\\pagestyle{.*?}', '', content)
    content = re.sub(r'\\thispagestyle{.*?}', '', content)
    content = re.sub(r'\\setcounter{.*?}{.*?}', '', content)
    content = re.sub(r'\\resizebox{.*?}{.*?}{', '', content)
    content = re.sub(r'\\tkzClip', '', content)
    content = re.sub(r'\\tkzInit.*?\n', '', content)

    # Clean duplicate newlines
    content = re.sub(r'\n{3,}', '\n\n', content)
    
    return content.strip()

def parse_tex_file(file_path, lesson_id):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Strip comments (lines starting with %) but not inside Tikz/code
    lines = content.split('\n')
    cleaned_lines = []
    for line in lines:
        if line.strip().startswith('%') and not line.strip().startswith('%mac'):
            continue
        cleaned_lines.append(line)
    content = '\n'.join(cleaned_lines)

    return clean_latex_content(content, lesson_id)

def parse_exercises_file(file_path, lesson_id):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Strip LaTeX comments (anything starting with % not escaped by \)
    content = re.sub(r'(?<!\\)%.*', '', content)

    # Normalize motcot, haicot, bacot, boncot to choice
    content = content.replace(r'\motcot', r'\choice')
    content = content.replace(r'\haicot', r'\choice')
    content = content.replace(r'\bacot', r'\choice')
    content = content.replace(r'\boncot', r'\choice')

    # Clean the entire content first so TikZ counters match perfectly
    cleaned_content = clean_latex_content(content, lesson_id)

    # Extract cleaned ex blocks
    ex_blocks = []
    idx = 0
    while True:
        match = re.search(r'\\begin{ex}', cleaned_content[idx:])
        if not match:
            break
        match_start = idx + match.start()
        end_match = re.search(r'\\end{ex}', cleaned_content[match_start:])
        if not end_match:
            break
        end_idx = match_start + end_match.end()
        ex_blocks.append(cleaned_content[match_start:end_idx])
        idx = end_idx

    exercises = []
    for q_idx, block in enumerate(ex_blocks):
        # Determine question type
        q_type = 'multiple_choice'
        options = []
        correct_option = 0
        
        # Check if shortans or choiceTF or choice
        shortans_match = re.search(r'\\shortans(?:\[.*?\])?{(.*?)}', block)
        choice_tf_match = re.search(r'\\choiceTF(?:\[.*?\])?', block)
        choice_match = re.search(r'\\choice', block)
        
        end_q_idx = len(block) - 8 # exclude \end{ex}
        if shortans_match:
            q_type = 'short_answer'
            end_q_idx = min(end_q_idx, shortans_match.start())
        elif choice_tf_match:
            q_type = 'true_false'
            end_q_idx = min(end_q_idx, choice_tf_match.start())
        elif choice_match:
            q_type = 'multiple_choice'
            end_q_idx = min(end_q_idx, choice_match.start())
        else:
            q_type = 'short_answer' # fallback
            
        q_text = block[:end_q_idx].strip()
        if q_text.startswith(r'\begin{ex}'):
            q_text = q_text[len(r'\begin{ex}'):].strip()
        
        if q_type == 'short_answer':
            if shortans_match:
                ans_val = shortans_match.group(1).strip()
            else:
                ans_val = ""
            correct_option = ans_val
        elif q_type == 'true_false':
            start_tf = choice_tf_match.end()
            curr = start_tf
            correct_option = []
            for _ in range(4):
                while curr < len(block) and block[curr].isspace():
                    curr += 1
                if curr < len(block) and block[curr] == '{':
                    stmt, next_curr = parse_braces(block, curr)
                    is_true = False
                    if stmt.strip().startswith(r'\True'):
                         is_true = True
                         stmt = stmt.replace(r'\True', '').strip()
                    options.append(stmt)
                    correct_option.append(is_true)
                    curr = next_curr
        elif q_type == 'multiple_choice':
            if choice_match:
                start_c = choice_match.end()
                curr = start_c
                for i in range(4):
                    while curr < len(block) and block[curr].isspace():
                        curr += 1
                    if curr < len(block) and block[curr] == '{':
                        opt, next_curr = parse_braces(block, curr)
                        if opt.strip().startswith(r'\True'):
                             correct_option = i
                             opt = opt.replace(r'\True', '').strip()
                        options.append(opt)
                        curr = next_curr
            else:
                correct_option = 0
                options = ["", "", "", ""]
                    
        # Extract explanation
        loigiai_match = re.search(r'\\loigiai', block)
        if loigiai_match:
            start_lg = loigiai_match.end()
            while start_lg < len(block) and block[start_lg].isspace():
                start_lg += 1
            if start_lg < len(block) and block[start_lg] == '{':
                explanation_content, _ = parse_braces(block, start_lg)
            else:
                explanation_content = ""
        else:
            explanation_content = ""
            
        if q_type == 'multiple_choice':
            cat_type = "Phần I: Trắc nghiệm 1 lựa chọn"
        elif q_type == 'true_false':
            cat_type = "Phần II: Câu hỏi Đúng/Sai"
        elif q_type == 'short_answer':
            cat_type = "Phần III: Trả lời ngắn"
            
        exercises.append({
            "id": f"{lesson_id}-ex-{q_idx + 1}",
            "question": q_text,
            "options": options,
            "correctOption": correct_option,
            "explanation": explanation_content,
            "qType": q_type,
            "type": "Đề ôn tập tổng hợp",
            "part": cat_type
        })
        
    return exercises

def main():
    base_repo_dir = "C:/Users/ThayVuongNTK/Documents/GitHub/vatli11kntt"
    output_dir = os.path.join(base_repo_dir, "src", "data")
    output_js = os.path.join(output_dir, "physicsData.js")
    output_lessons_dir = os.path.join(output_dir, "lessons")
    
    # Recreate clean lessons folder
    if os.path.exists(output_lessons_dir):
        shutil.rmtree(output_lessons_dir)
    os.makedirs(output_lessons_dir, exist_ok=True)
    
    chapter_lessons_map = {c["id"]: [] for c in CHAPTERS}
    
    for base_name, meta in LESSON_METADATA.items():
        if meta.get("type") == "review":
            file_path = os.path.join(base_repo_dir, "TailieuTeX", "Dethi", f"{base_name}.tex")
        else:
            file_path = os.path.join(base_repo_dir, "TailieuTeX", "Lythuyet", f"{base_name}.tex")
            
        file_path = os.path.normpath(file_path)
        if not os.path.exists(file_path):
            print(f"File not found: {file_path}")
            continue
            
        print(f"Parsing: {base_name}.tex ...")
        if meta.get("type") == "review":
            parsed_theory = ""
            parsed_exercises = parse_exercises_file(file_path, meta["id"])
        else:
            parsed_theory = parse_tex_file(file_path, meta["id"])
            parsed_exercises = []
            
        lesson_data = {
            "id": meta["id"],
            "title": meta["title"],
            "theory": parsed_theory,
            "exercises": parsed_exercises
        }
        
        # Output individual lesson file for dynamic import
        lesson_file_path = os.path.join(output_lessons_dir, f"{meta['id']}.js")
        with open(lesson_file_path, "w", encoding="utf-8") as lf:
            lf.write("export default ")
            lf.write(json.dumps(lesson_data, ensure_ascii=False, indent=2))
            lf.write(";\n")
        
        chapter_lessons_map[meta["chapter"]].append(lesson_data)
        
    # Build final list
    final_curriculum = []
    for c in CHAPTERS:
        final_curriculum.append({
            "id": c["id"],
            "title": c["title"],
            "lessons": chapter_lessons_map[c["id"]]
        })
    
    js_content = "export const physicsData = "
    json_str = json.dumps(final_curriculum, ensure_ascii=False, indent=2)
    js_content += json_str + ";\n"
    
    with open(output_js, "w", encoding="utf-8") as out:
        out.write(js_content)
        
    # Build and generate catalog file
    catalog = []
    for c in CHAPTERS:
        catalog.append({
            "id": c["id"],
            "title": c["title"],
            "lessons": [
                {"id": l["id"], "title": l["title"]} for l in chapter_lessons_map[c["id"]]
            ]
        })
    catalog_file_path = os.path.join(output_dir, "physicsCatalog.js")
    with open(catalog_file_path, "w", encoding="utf-8") as cf:
        cf.write("export const physicsCatalog = ")
        cf.write(json.dumps(catalog, ensure_ascii=False, indent=2))
        cf.write(";\n")
        
    print(f"SUCCESS: Generated {output_js}, {catalog_file_path}, and lessons in {output_lessons_dir}")

if __name__ == "__main__":
    main()
