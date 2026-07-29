import { supabaseClient } from "./supabase-client.js";

document.addEventListener("DOMContentLoaded", loadPublishedTeam);

async function loadPublishedTeam() {
    const container = document.querySelector("[data-team-members]");
    if (!container) return;

    const { data, error } = await supabaseClient
        .from("team_members")
        .select("slug, full_name, job_title, biography, photo_url, display_order")
        .eq("is_published", true)
        .order("display_order", { ascending: true })
        .order("full_name", { ascending: true });

    if (error) {
        console.error("Published team load failed:", error);
        // Keep the server-rendered team cards as a deployment-safe fallback.
        return;
    }

    if (!data?.length) {
        container.innerHTML = '<p class="team-load-message">New team profiles will be published soon.</p>';
        return;
    }

    container.replaceChildren(...data.map(createMemberCard));
}

function createMemberCard(member, index) {
    const card = document.createElement("article");
    card.className = "team-member";

    const imageBox = document.createElement("div");
    imageBox.className = member.photo_url ? "team-image" : "team-image team-image-placeholder";
    if (member.photo_url) {
        const image = document.createElement("img");
        image.src = member.photo_url;
        image.alt = member.full_name;
        image.loading = "lazy";
        imageBox.append(image);
    } else {
        const icon = document.createElement("i");
        icon.className = "bx bx-user";
        imageBox.append(icon);
    }

    const name = document.createElement("h4");
    const nameLink = document.createElement("a");
    nameLink.href = `/team/?profile=${encodeURIComponent(member.slug)}`;
    nameLink.textContent = member.full_name;
    name.append(nameLink);
    const role = document.createElement("p");
    role.className = "team-role";
    role.textContent = member.job_title;
    card.append(imageBox, name, role);
    return card;
}
