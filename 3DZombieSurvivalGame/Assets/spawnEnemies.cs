using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class spawnEnemies : MonoBehaviour
{
    public GameObject theEnemy;
    public int xPos;
    public int zPos;
    public int enemycount;
    void Start()
    {
        StartCoroutine(EnemyDrop());

    }
    IEnumerator EnemyDrop()
    {
        while (enemycount <50)
        {
            xPos = Random.Range(-45,45);
            zPos = Random.Range(-45,49);
            Instantiate(theEnemy, new Vector3(xPos, -9.85f, zPos), Quaternion.identity);
            yield return new WaitForSeconds(0.1f);
            enemycount += 1;

        }
    }


}
