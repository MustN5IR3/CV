using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class characteragent : MonoBehaviour
{
    public GameObject enemydestination;
    NavMeshAgent theEnemy;
    
    void Start()
    {
        theEnemy = GetComponent<NavMeshAgent>();
    }


    void Update()
    {
        theEnemy.SetDestination(enemydestination.transform.position);

    }
}
