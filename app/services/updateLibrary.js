import supabase from "../api/supabase";

export const updateLibrary = async (items, email) => {
    const { data, error } = await supabase.from("users").select("email, library").eq("email", email);

    if (error) {
        console.error(error);
        return;
    }

    const purchasedGames = items.map((item) => item._title);

    if (data.length === 0) {
        await supabase.from("users").insert({
            email,
            library: purchasedGames,
        });
    } else {
        const user = data[0];
        const updatedLibrary = [...user.library, ...purchasedGames];

        await supabase.from("users").update({ library: updatedLibrary }).eq("email", email);
    }
};
