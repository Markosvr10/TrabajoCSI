<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pelicula;
use App\Models\Genero;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        \App\Models\User::factory()->create([
            'name' => 'Marcos',
            'email' => 'marcos.vicenrios@alum.uca.es',
            'password' => bcrypt('marcos.vicenrios'),
        ]);

        // 2. CREAR GÉNEROS (Guardamos las instancias para usar sus IDs)
        $accion = \App\Models\Genero::create(['nombre' => 'Acción', 'nom_minus' => 'accion']);
        $thriller = \App\Models\Genero::create(['nombre' => 'Thriller', 'nom_minus' => 'thriller']);
        $comedia = \App\Models\Genero::create(['nombre' => 'Comedia', 'nom_minus' => 'comedia']);
        $terror = \App\Models\Genero::create(['nombre' => 'Terror', 'nom_minus' => 'terror']);
        $animacion = \App\Models\Genero::create(['nombre' => 'Animación', 'nom_minus' => 'animacion']);
        $romance = \App\Models\Genero::create(['nombre' => 'Romance', 'nom_minus' => 'romance']);
        $aventura = \App\Models\Genero::create(['nombre' => 'Aventura', 'nom_minus' => 'aventura']);

        // 3. CREAR PELÍCULAS

        // --- ACCIÓN ---
        \App\Models\Pelicula::create([
            'titulo' => 'Mad Max: Fury Road',
            'descripcion' => 'En un desierto post-apocalíptico, una mujer se rebela contra un gobernante tiránico en busca de su patria con la ayuda de un grupo de prisioneras, una adoradora psicótica y un vagabundo llamado Max.',
            'director' => 'George Miller',
            'ano_lanzamiento' => 2015,
            'valoracion' => 4.8,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Mad+Max',
            'trailer_url' => 'https://www.youtube.com/watch?v=hEJnMQG9ev8',
            'genero_id' => $accion->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'John Wick',
            'descripcion' => 'Un ex asesino a sueldo suspende su jubilación para localizar a los mafiosos que mataron a su perro y le quitaron todo, desatando una guerra en el inframundo criminal.',
            'director' => 'Chad Stahelski',
            'ano_lanzamiento' => 2014,
            'valoracion' => 4.7,
            'imagen_url' => 'https://via.placehold.co/300x450?text=John+Wick',
            'trailer_url' => 'https://www.youtube.com/watch?v=K1i1xYrDFpQ',
            'genero_id' => $accion->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Gladiator',
            'descripcion' => 'Un general romano traicionado, Máximo Décimo Meridio, busca venganza contra el corrupto emperador que asesinó a su familia y lo envió a la esclavitud.',
            'director' => 'Ridley Scott',
            'ano_lanzamiento' => 2000,
            'valoracion' => 4.9,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Gladiator',
            'trailer_url' => 'https://www.youtube.com/watch?v=Pb6WME02hdA',
            'genero_id' => $accion->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Die Hard (La Jungla de Cristal)',
            'descripcion' => 'El oficial de policía John McClane intenta salvar a su esposa y a otros rehenes tomados por terroristas alemanes durante una fiesta de Navidad en el Nakatomi Plaza.',
            'director' => 'John McTiernan',
            'ano_lanzamiento' => 1988,
            'valoracion' => 4.8,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Die+Hard',
            'trailer_url' => 'https://www.youtube.com/watch?v=TotSHi0ViUc',
            'genero_id' => $accion->id,
        ]);

        // --- THRILLER ---
        \App\Models\Pelicula::create([
            'titulo' => 'Se7en',
            'descripcion' => 'Dos detectives, un novato y un veterano, dan caza a un asesino en serie que utiliza los siete pecados capitales como motivos para sus crímenes.',
            'director' => 'David Fincher',
            'ano_lanzamiento' => 1995,
            'valoracion' => 4.9,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Se7en',
            'trailer_url' => 'https://www.youtube.com/watch?v=ogegN-lGuNo',
            'genero_id' => $thriller->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Prisoners',
            'descripcion' => 'Cuando la hija de Keller Dover y su amiga desaparecen, él toma el asunto en sus propias manos mientras la policía sigue múltiples pistas y la presión aumenta.',
            'director' => 'Denis Villeneuve',
            'ano_lanzamiento' => 2013,
            'valoracion' => 4.7,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Prisoners',
            'trailer_url' => 'https://www.youtube.com/watch?v=L88v-QyLk-s',
            'genero_id' => $thriller->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Perdida (Gone Girl)',
            'descripcion' => 'Con la desaparición de su esposa convertida en el foco de un circo mediático, un hombre ve cómo los focos se vuelven hacia él cuando se sospecha que puede no ser inocente.',
            'director' => 'David Fincher',
            'ano_lanzamiento' => 2014,
            'valoracion' => 4.6,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Gone+Girl',
            'trailer_url' => 'https://www.youtube.com/watch?v=LTjI_xT6fyk',
            'genero_id' => $thriller->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Shutter Island',
            'descripcion' => 'En 1954, un alguacil de los EE. UU. investiga la desaparición de una asesina que escapó de un hospital para criminales dementes en una isla remota.',
            'director' => 'Martin Scorsese',
            'ano_lanzamiento' => 2010,
            'valoracion' => 4.8,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Shutter+Island',
            'trailer_url' => 'https://www.youtube.com/watch?v=uMaJJ6TnmW4',
            'genero_id' => $thriller->id,
        ]);

        // --- COMEDIA ---
        \App\Models\Pelicula::create([
            'titulo' => 'Superbad (Supersalidos)',
            'descripcion' => 'Dos estudiantes de secundaria co-dependientes se ven obligados a lidiar con la ansiedad de separación después de que su plan para organizar una fiesta empapada de alcohol sale mal.',
            'director' => 'Greg Mottola',
            'ano_lanzamiento' => 2007,
            'valoracion' => 4.5,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Superbad',
            'trailer_url' => 'https://www.youtube.com/watch?v=MNpoTxeydiQ', // Trailer genérico oficial
            'genero_id' => $comedia->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Resacón en Las Vegas',
            'descripcion' => 'Tres amigos se despiertan de una despedida de soltero en Las Vegas sin recordar la noche anterior y con el novio desaparecido. Deben recorrer la ciudad para encontrarlo.',
            'director' => 'Todd Phillips',
            'ano_lanzamiento' => 2009,
            'valoracion' => 4.6,
            'imagen_url' => 'https://via.placehold.co/300x450?text=The+Hangover',
            'trailer_url' => 'https://www.youtube.com/watch?v=V6CAMQ5Q1NQ',
            'genero_id' => $comedia->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Los caballeros de la mesa cuadrada',
            'descripcion' => 'El Rey Arturo y sus Caballeros de la Mesa Redonda se embarcan en una búsqueda surrealista y de bajo presupuesto para encontrar el Santo Grial, encontrando muchos obstáculos tontos.',
            'director' => 'Terry Gilliam & Terry Jones',
            'ano_lanzamiento' => 1975,
            'valoracion' => 4.8,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Monty+Python',
            'trailer_url' => 'https://www.youtube.com/watch?v=21488auCBqw',
            'genero_id' => $comedia->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'El Gran Hotel Budapest',
            'descripcion' => 'Las aventuras de Gustave H, un legendario conserje en un famoso hotel europeo, y Zero Moustafa, el botones que se convierte en su amigo de mayor confianza.',
            'director' => 'Wes Anderson',
            'ano_lanzamiento' => 2014,
            'valoracion' => 4.7,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Grand+Budapest',
            'trailer_url' => 'https://www.youtube.com/watch?v=G1jG8HUY4zI',
            'genero_id' => $comedia->id,
        ]);

        // --- TERROR ---
        \App\Models\Pelicula::create([
            'titulo' => 'El Conjuro',
            'descripcion' => 'Los investigadores paranormales Ed y Lorraine Warren trabajan para ayudar a una familia aterrorizada por una presencia oscura en su granja.',
            'director' => 'James Wan',
            'ano_lanzamiento' => 2013,
            'valoracion' => 4.6,
            'imagen_url' => 'https://via.placehold.co/300x450?text=The+Conjuring',
            'trailer_url' => 'https://www.youtube.com/watch?v=_zU1gLWGnpg',
            'genero_id' => $terror->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Hereditary',
            'descripcion' => 'Una familia afligida es perseguida por sucesos trágicos y perturbadores que comienzan a desvelar oscuros secretos ancestrales.',
            'director' => 'Ari Aster',
            'ano_lanzamiento' => 2018,
            'valoracion' => 4.7,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Hereditary',
            'trailer_url' => 'https://www.youtube.com/watch?v=7jMdzpZgqb4',
            'genero_id' => $terror->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'It (Eso)',
            'descripcion' => 'En el verano de 1989, un grupo de niños acosados se unen para destruir a un monstruo que cambia de forma y que se disfraza de payaso para cazar a los niños de Derry.',
            'director' => 'Andy Muschietti',
            'ano_lanzamiento' => 2017,
            'valoracion' => 4.5,
            'imagen_url' => 'https://via.placehold.co/300x450?text=It',
            'trailer_url' => 'https://www.youtube.com/watch?v=mZZVFORtMXo',
            'genero_id' => $terror->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'El Resplandor',
            'descripcion' => 'Una familia se dirige a un hotel aislado para pasar el invierno donde una presencia espiritual influye en el padre hacia la violencia, mientras su hijo psíquico ve horribles premoniciones.',
            'director' => 'Stanley Kubrick',
            'ano_lanzamiento' => 1980,
            'valoracion' => 4.9,
            'imagen_url' => 'https://via.placehold.co/300x450?text=The+Shining',
            'trailer_url' => 'https://www.youtube.com/watch?v=Q3lkZ1xfLZ4',
            'genero_id' => $terror->id,
        ]);

        // --- ANIMACIÓN ---
        \App\Models\Pelicula::create([
            'titulo' => 'El viaje de Chihiro',
            'descripcion' => 'Durante la mudanza de su familia, una niña de 10 años deambula por un mundo gobernado por dioses, brujas y espíritus donde los humanos se convierten en bestias.',
            'director' => 'Hayao Miyazaki',
            'ano_lanzamiento' => 2001,
            'valoracion' => 5.0,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Chihiro',
            'trailer_url' => 'https://www.youtube.com/watch?v=ByXuk9QqQkk',
            'genero_id' => $animacion->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'El Rey León',
            'descripcion' => 'El príncipe león Simba y su padre son el objetivo de su amargado tío, quien quiere ascender al trono él mismo.',
            'director' => 'Roger Allers & Rob Minkoff',
            'ano_lanzamiento' => 1994,
            'valoracion' => 4.9,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Lion+King',
            'trailer_url' => 'https://www.youtube.com/watch?v=8PY1J2USU7k',
            'genero_id' => $animacion->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Spider-Man: Un nuevo universo',
            'descripcion' => 'El adolescente Miles Morales se convierte en el Spider-Man de su universo y debe unirse a cinco individuos con poderes arácnidos de otras dimensiones para detener una amenaza para todas las realidades.',
            'director' => 'Bob Persichetti et al.',
            'ano_lanzamiento' => 2018,
            'valoracion' => 4.9,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Spider-Verse',
            'trailer_url' => 'https://www.youtube.com/watch?v=pDsxJzLlq5U',
            'genero_id' => $animacion->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Toy Story',
            'descripcion' => 'Un muñeco vaquero se siente celoso y amenazado cuando una nueva figura de acción de un hombre espacial lo suplanta como el juguete favorito de un niño.',
            'director' => 'John Lasseter',
            'ano_lanzamiento' => 1995,
            'valoracion' => 4.8,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Toy+Story',
            'trailer_url' => 'https://www.youtube.com/watch?v=mTkzJWp9ZrY',
            'genero_id' => $animacion->id,
        ]);

        // --- ROMANCE ---
        \App\Models\Pelicula::create([
            'titulo' => 'El diario de Noa (The Notebook)',
            'descripcion' => 'Un anciano le lee a una mujer con demencia la historia de dos jóvenes amantes que fueron separados por las diferencias sociales pero se reencontraron años después.',
            'director' => 'Nick Cassavetes',
            'ano_lanzamiento' => 2004,
            'valoracion' => 4.6,
            'imagen_url' => 'https://via.placehold.co/300x450?text=The+Notebook',
            'trailer_url' => 'https://www.youtube.com/watch?v=M3wGV7sKgn4',
            'genero_id' => $romance->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Orgullo y Prejuicio',
            'descripcion' => 'Las chispas vuelan cuando la enérgica Elizabeth Bennet conoce al soltero, rico y orgulloso Sr. Darcy. Pero el Sr. Darcy se enamora regañadientes de una mujer por debajo de su clase.',
            'director' => 'Joe Wright',
            'ano_lanzamiento' => 2005,
            'valoracion' => 4.7,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Pride+Prejudice',
            'trailer_url' => 'https://www.dailymotion.com/video/x9g7iay', // Nota: Usé Dailymotion porque aparecía primero, si prefieres youtube busca "Pride and prejudice 2005 trailer"
            'genero_id' => $romance->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'La La Land',
            'descripcion' => 'Mientras navegan por sus carreras en Los Ángeles, un pianista y una actriz se enamoran mientras intentan reconciliar sus aspiraciones para el futuro.',
            'director' => 'Damien Chazelle',
            'ano_lanzamiento' => 2016,
            'valoracion' => 4.8,
            'imagen_url' => 'https://via.placehold.co/300x450?text=La+La+Land',
            'trailer_url' => 'https://www.youtube.com/watch?v=mK46ZapQDcU',
            'genero_id' => $romance->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Titanic',
            'descripcion' => 'Una aristócrata de diecisiete años se enamora de un artista amable pero pobre a bordo del lujoso e infortunado R.M.S. Titanic.',
            'director' => 'James Cameron',
            'ano_lanzamiento' => 1997,
            'valoracion' => 4.8,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Titanic',
            'trailer_url' => 'https://www.youtube.com/watch?v=64IIfxDrhJY',
            'genero_id' => $romance->id,
        ]);

        // --- AVENTURA ---
        \App\Models\Pelicula::create([
            'titulo' => 'El Señor de los Anillos: La Comunidad del Anillo',
            'descripcion' => 'Un humilde Hobbit de la Comarca y ocho compañeros se embarcan en un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.',
            'director' => 'Peter Jackson',
            'ano_lanzamiento' => 2001,
            'valoracion' => 5.0,
            'imagen_url' => 'https://via.placehold.co/300x450?text=LOTR',
            'trailer_url' => 'https://www.youtube.com/watch?v=mBLFusRHUyc',
            'genero_id' => $aventura->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'Indiana Jones y los cazadores del arca perdida',
            'descripcion' => 'En 1936, el arqueólogo y aventurero Indiana Jones es contratado por el gobierno de los EE. UU. para encontrar el Arca de la Alianza antes que los nazis.',
            'director' => 'Steven Spielberg',
            'ano_lanzamiento' => 1981,
            'valoracion' => 4.9,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Indiana+Jones',
            'trailer_url' => 'https://www.youtube.com/watch?v=cgWHlD_--fM',
            'genero_id' => $aventura->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'El Renacido (The Revenant)',
            'descripcion' => 'Un hombre de la frontera en una expedición de comercio de pieles en la década de 1820 lucha por sobrevivir después de ser atacado por un oso y dado por muerto por miembros de su propio equipo de caza.',
            'director' => 'Alejandro G. Iñárritu',
            'ano_lanzamiento' => 2015,
            'valoracion' => 4.7,
            'imagen_url' => 'https://via.placehold.co/300x450?text=The+Revenant',
            'trailer_url' => 'https://www.youtube.com/watch?v=LoebZZ8K5N0', // Enlace genérico oficial
            'genero_id' => $aventura->id,
        ]);

        \App\Models\Pelicula::create([
            'titulo' => 'La vida de Pi',
            'descripcion' => 'Un joven que sobrevive a un desastre en el mar se ve inmerso en un viaje épico de aventura y descubrimiento. Mientras está a la deriva, forma una conexión inesperada con otro superviviente: un temible tigre de Bengala.',
            'director' => 'Ang Lee',
            'ano_lanzamiento' => 2012,
            'valoracion' => 4.6,
            'imagen_url' => 'https://via.placehold.co/300x450?text=Life+of+Pi',
            'trailer_url' => 'https://www.youtube.com/watch?v=YJGJVeiiYJM',
            'genero_id' => $aventura->id,
        ]);
    }
}
