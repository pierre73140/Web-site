<?php
	$allArticles[] = '<article id="art-0">
		<h1>Accueil charmant !</h1>
		<p>
			<span id="pseudo">engel731</span>
			<img src="images/notes.png" alt="les notes" /><br /><br />
			
			<span class="contenu">Maecenas leo lacus, porta et imperdiet quis, vehicula sit amet nisl. Etiam id imperdiet nibh, non interdum massa. Phasellus molestie id magna ullamcorper dignissim.</span>
		</p>
	</article>';

	$allArticles[] = '<article id="art-1">
		<h1>velit fringilla</h1>
		<p>
			<span id="pseudo">tincidunt854</span>
			<img src="images/notes.png" alt="les notes" /><br /><br />
			
			<span class="contenu">Curabitur dapibus dignissim ornare. Vestibulum at ullamcorper odio, non vestibulum lacus. Pellentesque tincidunt tortor vel velit fringilla, in dapibus est viverra.</span>
		</p>
	</article>';

	$allArticles[] = '<article id="art-2">
		<h1>Pellentesque tincidunt</h1>
		<p>
			<span id="pseudo">Suspendisse987</span>
			<img src="images/notes.png" alt="les notes" /><br /><br />
			
			<span class="contenu">Suspendisse fringilla leo vel congue porta. In hac habitasse platea dictumst. Praesent massa nisl, suscipit ac pretium vel, tempor quis ligula.</span>
		</p>
	</article>';

	$allArticles[] = '<article id="art-3">
		<h1>Sed pretium maximus sodales</h1>
		<p>
			<span id="pseudo">justo578</span>
			<img src="images/notes.png" alt="les notes" /><br /><br />
			
			<span class="contenu">Aliquam id euismod magna, non dapibus erat. Phasellus eu arcu in elit porttitor vulputate. Aliquam non nisl sem. Quisque enim libero.</span>
		</p>
	</article>';
	
	$allArticles[] = '<article id="art-3">
		<h1>Le dernier message</h1>
		<p>
			<span id="pseudo">kagoule</span>
			<img src="images/notes.png" alt="les notes" /><br /><br />
			
			<span class="contenu">Aliquam id euismod magna, non dapibus erat. Phasellus eu arcu in elit porttitor vulputate. Aliquam non nisl sem. Quisque enim libero.</span>
		</p>
	</article>';
	
	echo $allArticles[$_GET['index']];
?>