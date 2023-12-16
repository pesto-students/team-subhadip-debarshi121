// Javascript program to demonstrate working of
// Cuckoo hashing.

// upper bound on number of elements in our set
let MAXN = 11;

// choices for position
let ver = 2;

// Auxiliary space bounded by a small multiple
// of MAXN, minimizing wastage
let hashtable = new Array(ver);
for (var i = 0; i < hashtable.length; i++) {
	hashtable[i] = new Array(2);
}

// Array to store possible positions for a key
let pos = Array(ver).fill(0);

/* function to fill hash table with dummy value
 * dummy value: let_MIN
 * number of hashtables: ver */
function initTable() {
	for (let j = 0; j < MAXN; j++) for (let i = 0; i < ver; i++) hashtable[i][j] = Number.MIN_VALUE;
}

/* return hashed value for a key
* function: ID of hash function according to which
	key has to hashed
* key: item to be hashed */
function hash(fn, key) {
	switch (fn) {
		case 1:
			return key % MAXN;
		case 2:
			return Math.floor(key / MAXN) % MAXN;
	}
	return Number.MIN_VALUE;
}

/* function to place a key in one of its possible positions
* tableID: table in which key has to be placed, also equal
to function according to which key must be hashed
* cnt: number of times function has already been called
in order to place the first input key
* n: maximum number of times function can be recursively
called before stopping and declaring presence of cycle */
function place(key, tableID, cnt, n) {
	/* if function has been recursively called max number
	of times, stop and declare cycle. Rehash. */
	if (cnt == n) {
		console.log(key + " unpositioned");
		console.log("Cycle present. REHASH.");
		return;
	}

	/* calculate and store possible positions for the key.
	* check if key already present at any of the positions.
	If YES, return. */
	for (let i = 0; i < ver; i++) {
		pos[i] = hash(i + 1, key);
		if (hashtable[i][pos[i]] == key) return;
	}

	/* check if another key is already present at the
	position for the new key in the table
	* If YES: place the new key in its position
	* and place the older key in an alternate position
	for it in the next table */
	if (hashtable[tableID][pos[tableID]] != Number.MIN_VALUE) {
		let dis = hashtable[tableID][pos[tableID]];
		hashtable[tableID][pos[tableID]] = key;
		place(dis, (tableID + 1) % ver, cnt + 1, n);
	} // else: place the new key in its position
	else hashtable[tableID][pos[tableID]] = key;
}

/* function to print hash table contents */
function printTable() {
	console.log("Final hash tables:");

	for (let i = 0; i < ver; i++)
		for (let j = 0; j < MAXN; j++)
			if (hashtable[i][j] == Number.MIN_VALUE) console.log("- ");
			else console.log(hashtable[i][j] + " ");
}

/* function for Cuckoo-hashing keys
 * keys[]: input array of keys
 * n: size of input array */
function cuckoo(keys, n) {
	// initialize hash tables to a dummy value
	// (let-MIN) indicating empty position
	initTable();

	// start with placing every key at its position in
	// the first hash table according to first hash
	// function
	for (let i = 0, cnt = 0; i < n; i++, cnt = 0) place(keys[i], 0, cnt, n);

	// print the final hash tables
	printTable();
}

// Driver program

/* following array doesn't have any cycles and
	hence all keys will be inserted without any
	rehashing */
let keys_1 = [20, 50, 53, 75, 100, 67, 105, 3, 36, 39];

let n = keys_1.length;

cuckoo(keys_1, n);

/* following array has a cycle and hence we will
	have to rehash to position every key */
let keys_2 = [20, 50, 53, 75, 100, 67, 105, 3, 36, 39, 6];

let m = keys_2.length;

cuckoo(keys_2, m);
