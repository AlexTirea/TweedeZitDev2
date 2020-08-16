class Firebase {
    constructor(apiKey, projectId, storageBucket) {
        firebase.initializeApp({
            apiKey,
            projectId,
            storageBucket
        });
        this.database = firebase.firestore();
        this.fileStorage = firebase.storage().ref();
    }
    convertQuerySnapshotToRegularArray(querySnapshot) {
        return querySnapshot.docs.map((item) => ({
            id: item.id,
            ...item.data()
        }));
    }
    get postsCollection() {
        return this.database.collection("games");
    }
}

export const firebaseInstance = new Firebase('AIzaSyBM7ai3JVLsTiCVrj38iJaYEdBs4skshpE', 'project-675480144922', 'gs://werkstuk-3a652.appspot.com');