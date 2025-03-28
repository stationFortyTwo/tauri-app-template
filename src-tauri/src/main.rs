use serde::{Deserialize, Serialize};

fn main() {
    tauri::Builder::default()
        .manage(ChatState::default())
        .invoke_handler(tauri::generate_handler![
            get_models,
            generate_response,
            get_chat_history
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}