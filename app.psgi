use strict;
use warnings;

open INDEX, "index.html";
my $index = do { local $/; <INDEX> };

return sub {
    [
        200,
        [ 'Content-Type' => 'text/html' ],
        [ $index ]
    ];
}
