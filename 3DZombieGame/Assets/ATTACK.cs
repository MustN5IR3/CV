using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ATTACK : MonoBehaviour
{
    public Animator m_animator;
    public Transform attackPoint;
    public float attackrange = 0.5f;
    public LayerMask enemyLayers;
    public float attackRate = 2f;
    float NextAttackTime = 0f;
    public AudioSource PunchS;
    public AudioSource deadS;
    // Update is called once per frame
    void Update()
    {
        if (Time.time >= NextAttackTime)
        {
            if (Input.GetMouseButtonDown(0))
            {
                attacking();
                PunchS.enabled = true;
                NextAttackTime = Time.time + 1f / attackRate;
            }else
            {
                PunchS.enabled = false;
            }
        } 
    }
    void attacking()
    {
        // play an attaack animation
        m_animator.SetTrigger("attack");

        //detect enemies in range of attack
        Collider[] hitEnemies = Physics.OverlapSphere(attackPoint.position, attackrange, enemyLayers);
       
        //damage them
        foreach(Collider enemy in hitEnemies)
        {
            deadS.enabled = false;
            enemy.GetComponent<enemy>().TakeDamage(100);
            deadS.enabled = true;
        }
        
    }

    private void OnDrawGizmosSelected()
    {
        if (attackPoint == null)
            return;

        Gizmos.DrawWireSphere(attackPoint.position, attackrange);
    }
}
